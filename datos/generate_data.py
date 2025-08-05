import pandas as pd
import json
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import os

# Configuración para que matplotlib no intente abrir una ventana
plt.switch_backend('Agg')

def generate_eda_and_json(csv_path, output_json_path='data_for_charts.json', output_eda_report='eda_report.md', output_img_dir='eda_images'):
    """
    Realiza un Análisis Exploratorio de Datos (EDA) del CSV,
    genera un archivo JSON con datos agregados para gráficos dinámicos,
    y crea un informe EDA en Markdown con gráficos estáticos.
    """
    # Crear el directorio para las imágenes EDA si no existe
    if not os.path.exists(output_img_dir):
        os.makedirs(output_img_dir)

    try:
        df = pd.read_csv(csv_path)
        print(f"CSV cargado exitosamente desde: {csv_path}")
        print(f"Columnas disponibles: {df.columns.tolist()}")
    except FileNotFoundError:
        print(f"Error: El archivo CSV no se encontró en la ruta: {csv_path}")
        return
    except Exception as e:
        print(f"Error al cargar el CSV: {e}")
        return

    # --- Renombrar columnas para facilitar el acceso y manejar nombres largos ---
    # Mapeo de nombres de columnas originales a nombres más cortos y manejables
    column_mapping = {
        '¿Resides actualmente en Barcelona o su área metropolitana? / Do you currently reside in Barcelona or its metropolitan area?': 'Reside_Barcelona',
        '¿Te identificas como mujer?\n': 'Identifica_Mujer',
        '¿Trabajas o has trabajado en el sector tecnológico en los últimos 3 años? / Do you work or have you worked in the technology sector in the last 3 years?': 'Trabaja_Tech_3Años',
        '¿Participas activamente en una comunidad profesional de mujeres en tecnología con presencia en Barcelona?\n(Ejemplos: Women Techmakers, AdaLoveDev, AllWomen, FemCoders Club, Women in Mobile. Puede tratarse de comunidades locales o nacionales con actividad en Barcelona,\n incluyendo secciones de género en asociaciones mixtas.)\n__________\nAre you actively involved in a professional community for women in technology based in Barcelona?': 'Miembro_Activa',
        '¿Qué rol técnico o de liderazgo en tecnología desempeñas actualmente o has desempeñado en los últimos 24 meses?\n(Puedes marcar más de una opción)\n____\nWhat technical or technology leadership role do you currently hold or have held in the last 24 months?\n\n(You may select more than one option)': 'Roles_Tecnicos',
        '¿En qué tipo de organización trabajas actualmente o trabajaste recientemente? (Puedes elegir mas de una opción siempre que trabajes en dos o más modalidades) / What type of organization do you currently work for or have you recently worked for? (You can choose more than one option as long as you work in two or more areas.)': 'Tipo_Organizacion',
        '¿En qué sector trabaja principalmente tu organización? / What sector does your organization primarily operate in?': 'Sector_Organizacion',
        '¿Con qué frecuencia participas en actividades de tu comunidad profesional (como eventos, talleres, foros online)? / How often do you participate in activities within your professional community (such as events, workshops, online forums)?': 'Frecuencia_Participacion',
        '¿Crees que participar en comunidades profesionales ha contribuido a tu inclusión o sentido de pertenencia en equipos o entornos tecnológicos? /Do you think participating in professional communities has contributed to your inclusion or sense of belonging in teams or technological environments?': 'Impacto_Inclusion',
        '¿Has notado un aumento de mujeres en los equipos tecnológicos con los que trabajas en los últimos años? / Have you noticed an increase in women in the tech teams you work with in recent years?': 'Aumento_Mujeres_Equipos',
        '¿Cuál es tu forma principal de participación?': 'Forma_Participacion',
        'Nombre de la comunidad profesional (opcional): / Name of the professional community (optional):': 'Nombre_Comunidad',
        '¿Cómo describirías su estructura organizativa? (elige una)  / How would you describe its organizational structure? (Choose one)': 'Estructura_Organizativa',
        '¿Crees que una estructura colaborativa promueve mejor la equidad de género?   / Do you think a collaborative structure better promotes gender equity?': 'Estructura_Colaborativa_Equidad',
        '¿Qué actividades iniciativas o acciones de la comunidad han sido más efectivas para promover la equidad de género? (Puedes elegir más de una opción) ': 'Acciones_Efectivas_Equidad',
        '¿Tu comunidad te ha ayudado a superar alguna de estas barreras? (Puedes seleccionar varias opciones) / Has your community helped you overcome any of these barriers? (You can select multiple options)': 'Barreras_Superadas',
        '¿Has participado en iniciativas entre comunidades profesionales de mujeres y empresas tecnológicas? / Have you participated in initiatives between professional women\'s communities and technology companies?': 'Iniciativas_Comunidad_Empresa',
        '¿Consideras que estas iniciativas entre comunidades y empresas contribuyeron a que tu lugar de trabajo sea más inclusivo?': 'Iniciativas_Hacen_Inclusivo',
        '¿Qué acciones específicas siguen consolidando (Añadir) y podrían impulsar la inclusión desde estas alianzas ¿por ambas partes comunidades y empres': 'Acciones_Consolidar_Inclusion_1',
        '¿Qué acciones específicas se están llevando a cabo actualmente, y cuáles podrían impulsarse a futuro desde las alianzas entre comunidades y empresas tecnológicas para fomentar la inclusión en el sector?\nPuedes responder desde la perspectiva de una o ambas partes (comunidades y/o empresas) y, si lo deseas, añade brevemente un ejemplo concreto (por ejemplo: mentorías, becas, colaboraciones formativas, etc.).  \n______\nWhat specific actions are currently being carried out, and which ones could be promoted in the future through partnerships between communities and technology companies to foster inclusion in the sector?\nYou can answer from the perspective of one or both parties (communities and/or companies) and, if you wish, briefly add a specific example (for example, mentoring, scholarships, training collaborations, etc.).': 'Acciones_Consolidar_Inclusion_2',
        '¿Qué podrían hacer las empresas para fortalecer estas colaboraciones?  Respuesta abierta / What could companies do to strengthen these collaborations? Open response': 'Acciones_Empresas_Fortalecer',
        '¿Con qué frecuencia participas en eventos o actividades de la comunidad (p. ej., meetups, talleres, foros online)? / How often do you participate in community events or activities (e.g., meetups, workshops, online forums)?': 'Frecuencia_Eventos_Comunidad',
        '¿La participación ha expandido tu red profesional? / Has participating expanded your professional network?': 'Red_Expandida',
        '¿Has accedido a nuevas oportunidades laborales gracias a esa red? / Have you accessed new job opportunities thanks to this network?': 'Nuevas_Oportunidades_Laborales',
        ' Si respondiste "Sí", ¿cuáles? / If you answered "Yes", which ones?': 'Tipo_Oportunidades_Laborales',
        '¿Tu participación en la comunidad ha influido en tu decisión de continuar en el sector tecnológico? / Has your involvement in the community influenced your decision to continue in the tech sector?': 'Influencia_Continuidad_Sector',
        'Si sí, ¿cómo te animó la comunidad a quedarte? / If yes, how did the community encourage you to stay?': 'Como_Animo_Comunidad',
        '¿En qué medida tu comunidad contribuye al Objetivo de Desarrollo Sostenible 5 (Igualdad de Género)?  / To what extent does your community contribute to Sustainable Development Goal 5 (Gender Equality)?': 'Contribucion_ODS5',
        'Edad: / Age:': 'Edad',
        'Nacionalidad: / Nationality:\n': 'Nacionalidad',
        'Nivel educativo más alto:': 'Nivel_Educativo',
        'Años de experiencia en el sector tecnológico:  / Years of experience in the technology sector:': 'Años_Experiencia',
        'Ciudad de residencia: / City of residence:': 'Ciudad_Residencia',
        'Situación laboral actual (marca todas las que apliquen): / Current employment status (check all that apply):': 'Situacion_Laboral',
        '¿Tienes personas a tu cargo?': 'Personas_A_Cargo',
        'Sí has respondido que estas en actividad, ¿cuál es tú salario anual aproximado? / If you answered that you are active, what is your approximate annual salary?': 'Salario_Anual'
    }
    df.rename(columns=column_mapping, inplace=True)

    # --- Filtrar solo las respuestas válidas para el estudio ---
    # Criterios de inclusión: Reside en Barcelona, se identifica como mujer, trabaja/ha trabajado en tech en los últimos 3 años
    df_filtered = df[
        df['Reside_Barcelona'].str.contains('Sí|Yes', na=False) &
        df['Identifica_Mujer'].str.contains('Si|Yes', na=False) &
        df['Trabaja_Tech_3Años'].str.contains('Sí|Yes', na=False)
    ].copy()

    if df_filtered.empty:
        print("No hay datos válidos después de aplicar los filtros de inclusión.")
        return

    # Convertir 'Edad' a numérico, manejando errores y limpiando
    df_filtered['Edad'] = df_filtered['Edad'].astype(str).str.extract('(\d+)').astype(float) # Extraer solo números
    df_filtered.dropna(subset=['Edad'], inplace=True)
    df_filtered['Edad'] = df_filtered['Edad'].astype(int) # Convertir a entero después de limpiar

    # --- Análisis Exploratorio de Datos (EDA) ---
    eda_report_content = []
    eda_report_content.append("# Informe de Análisis Exploratorio de Datos (EDA)\n")
    eda_report_content.append(f"**Fecha de Generación:** {pd.Timestamp.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
    eda_report_content.append(f"**Número total de respuestas cargadas:** {len(df)}\n")
    eda_report_content.append(f"**Número de respuestas válidas (filtradas):** {len(df_filtered)}\n")

    eda_report_content.append("\n## 1. Estadísticas Descriptivas\n")
    # --- Crear gráfico de distribución de Edad ---
    edad_img_path = os.path.join(output_img_dir, 'hist_edad.png')
    plt.figure(figsize=(8, 5))
    sns.histplot(df_filtered['Edad'], bins=10, kde=True, color='mediumorchid')
    plt.title('Distribución de Edad')
    plt.xlabel('Edad')
    plt.ylabel('Frecuencia')
    plt.tight_layout()
    plt.savefig(edad_img_path)
    plt.close()

    eda_report_content.append("\n### Distribución de Edad\n")
    eda_report_content.append(f"![Distribución de Edad]({edad_img_path})\n")

    # Puedes agregar más análisis aquí: Nivel Educativo, Años de Experiencia, etc.

    # --- Guardar informe Markdown ---
    with open(output_eda_report, 'w', encoding='utf-8') as f:
        f.write('\n'.join(eda_report_content))

    # --- Crear archivo JSON para gráficos dinámicos ---
    data_for_json = {
        "Edad": df_filtered['Edad'].value_counts().sort_index().to_dict(),
        "Nivel_Educativo": df_filtered['Nivel_Educativo'].value_counts().to_dict(),
        "Años_Experiencia": df_filtered['Años_Experiencia'].value_counts().to_dict()
        # Puedes agregar más columnas categóricas aquí si lo deseas
    }

    with open(output_json_path, 'w', encoding='utf-8') as f_json:
        json.dump(data_for_json, f_json, ensure_ascii=False, indent=4)

    print(f"Informe EDA generado en: {output_eda_report}")
    print(f"Datos para visualizaciones guardados en: {output_json_path}")