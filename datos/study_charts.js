document.addEventListener('DOMContentLoaded', () => {
    // Cargar los datos del JSON generado por Python
    const chartDataElement = document.getElementById('chart-data');
    let data = {};
    try {
        data = JSON.parse(chartDataElement.textContent);
        console.log("Datos cargados para gráficos:", data);
    } catch (e) {
        console.error("Error al parsear los datos del JSON:", e);
        console.log("Contenido del elemento chart-data:", chartDataElement.textContent);
        return; // Detener la ejecución si los datos no se cargan correctamente
    }

    // Actualizar las estadísticas principales
    document.getElementById('total-responses').textContent = data.totalResponses || 'N/A';
    document.getElementById('active-members').textContent = data.activeMembersPercentage !== undefined ? `${data.activeMembersPercentage}%` : 'N/A';
    document.getElementById('avg-age').textContent = data.avgAge || 'N/A';
    document.getElementById('inclusion-impact').textContent = data.inclusionImpactPercentage !== undefined ? `${data.inclusionImpactPercentage}%` : 'N/A';

    // Variables para almacenar las instancias de los gráficos
    let rolesChartInstance, participationChartInstance, belongingChartInstance,
        ageChartInstance, barriersChartInstance, actionsChartInstance,
        networkChartInstance, continuityChartInstance;

    // Función para crear o actualizar un gráfico
    function createOrUpdateChart(chartId, chartType, chartData, options = {}) {
        const ctx = document.getElementById(chartId);
        if (!ctx) {
            console.warn(`Canvas element with ID '${chartId}' not found.`);
            return null;
        }
        const context = ctx.getContext('2d');
        let chartInstance;

        // Destruir la instancia existente si la hay
        if (window[chartId + 'Instance']) {
            window[chartId + 'Instance'].destroy();
        }

        chartInstance = new Chart(context, {
            type: chartType,
            data: chartData,
            options: options
        });
        window[chartId + 'Instance'] = chartInstance; // Almacenar la instancia en el objeto global window
        return chartInstance;
    }

    // Función para renderizar todos los gráficos
    function renderCharts(chartData) {
        // Colores para los gráficos (puedes personalizarlos)
        const primaryColor = 'rgba(75, 192, 192, 0.8)';
        const secondaryColor = 'rgba(153, 102, 255, 0.8)';
        const tertiaryColor = 'rgba(255, 159, 64, 0.8)';
        const accentColor1 = 'rgba(255, 99, 132, 0.8)';
        const accentColor2 = 'rgba(54, 162, 235, 0.8)';
        const accentColor3 = 'rgba(201, 203, 207, 0.8)';
        const borderColor = 'rgba(75, 192, 192, 1)';

        const backgroundColors = [
            primaryColor, secondaryColor, tertiaryColor, accentColor1, accentColor2, accentColor3,
            'rgba(255, 205, 86, 0.8)', 'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)'
        ];

        // Gráfico de Roles Técnicos
        if (chartData.rolesData && chartData.rolesData.labels.length > 0) {
            rolesChartInstance = createOrUpdateChart('rolesChart', 'bar', {
                labels: chartData.rolesData.labels,
                datasets: [{
                    label: 'Número de Respuestas',
                    data: chartData.rolesData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.rolesData.labels.length),
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            }, {
                indexAxis: 'y', // Barras horizontales
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { beginAtZero: true }
                },
                plugins: {
                    legend: { display: false }
                }
            });
        } else {
            console.warn("No hay datos para el gráfico de Roles Técnicos.");
        }

        // Gráfico de Nivel de Participación en Comunidades
        if (chartData.participationData && chartData.participationData.labels.length > 0) {
            participationChartInstance = createOrUpdateChart('participationChart', 'pie', {
                labels: chartData.participationData.labels,
                datasets: [{
                    label: 'Frecuencia de Participación',
                    data: chartData.participationData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.participationData.labels.length),
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false,
            });
        } else {
            console.warn("No hay datos para el gráfico de Nivel de Participación.");
        }

        // Gráfico de Impacto en Sentido de Pertenencia
        if (chartData.belongingData && chartData.belongingData.labels.length > 0) {
            belongingChartInstance = createOrUpdateChart('belongingChart', 'doughnut', {
                labels: chartData.belongingData.labels,
                datasets: [{
                    label: 'Impacto en Pertenencia',
                    data: chartData.belongingData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.belongingData.labels.length),
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false,
            });
        } else {
            console.warn("No hay datos para el gráfico de Impacto en Sentido de Pertenencia.");
        }

        // Gráfico de Distribución por Edad
        if (chartData.ageData && chartData.ageData.labels.length > 0) {
            ageChartInstance = createOrUpdateChart('ageChart', 'bar', {
                labels: chartData.ageData.labels,
                datasets: [{
                    label: 'Número de Respuestas',
                    data: chartData.ageData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.ageData.labels.length),
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true }
                },
                plugins: {
                    legend: { display: false }
                }
            });
        } else {
            console.warn("No hay datos para el gráfico de Distribución por Edad.");
        }

        // Gráfico de Barreras Identificadas
        if (chartData.barriersData && chartData.barriersData.labels.length > 0) {
            barriersChartInstance = createOrUpdateChart('barriersChart', 'bar', {
                labels: chartData.barriersData.labels,
                datasets: [{
                    label: 'Número de Respuestas',
                    data: chartData.barriersData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.barriersData.labels.length),
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                }]
            }, {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { beginAtZero: true }
                },
                plugins: {
                    legend: { display: false }
                }
            });
        } else {
            console.warn("No hay datos para el gráfico de Barreras Identificadas.");
        }

        // Gráfico de Acciones Más Efectivas para Promover Equidad de Género
        if (chartData.actionsData && chartData.actionsData.labels.length > 0) {
            actionsChartInstance = createOrUpdateChart('actionsChart', 'bar', {
                labels: chartData.actionsData.labels,
                datasets: [{
                    label: 'Número de Respuestas',
                    data: chartData.actionsData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.actionsData.labels.length),
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            }, {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { beginAtZero: true }
                },
                plugins: {
                    legend: { display: false }
                }
            });
        } else {
            console.warn("No hay datos para el gráfico de Acciones Más Efectivas.");
        }

        // Gráfico de Expansión de Red Profesional
        if (chartData.networkData && chartData.networkData.labels.length > 0) {
            networkChartInstance = createOrUpdateChart('networkChart', 'pie', {
                labels: chartData.networkData.labels,
                datasets: [{
                    label: 'Expansión de Red Profesional',
                    data: chartData.networkData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.networkData.labels.length),
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false,
            });
        } else {
            console.warn("No hay datos para el gráfico de Expansión de Red Profesional.");
        }

        // Gráfico de Influencia en Continuidad en el Sector
        if (chartData.continuityData && chartData.continuityData.labels.length > 0) {
            continuityChartInstance = createOrUpdateChart('continuityChart', 'doughnut', {
                labels: chartData.continuityData.labels,
                datasets: [{
                    label: 'Influencia en Continuidad',
                    data: chartData.continuityData.data,
                    backgroundColor: backgroundColors.slice(0, chartData.continuityData.labels.length),
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false,
            });
        } else {
            console.warn("No hay datos para el gráfico de Influencia en Continuidad en el Sector.");
        }
    }

    // Renderizar los gráficos iniciales
    renderCharts(data);

    // Lógica de filtrado (simplificada)
    // Para un filtrado real, necesitarías cargar los datos brutos en JavaScript
    // y realizar las agregaciones aquí, o tener múltiples JSONs pre-agregados
    // por Python para cada combinación de filtro.
    // Por ahora, los filtros no afectarán los gráficos, solo son placeholders visuales.
    const roleFilter = document.getElementById('role-filter');
    const experienceFilter = document.getElementById('experience-filter');

    function applyFilters() {
        const selectedRole = roleFilter.value;
        const selectedExperience = experienceFilter.value;
        console.log(`Filtros aplicados: Rol - ${selectedRole}, Experiencia - ${selectedExperience}`);
        // Aquí iría la lógica para re-filtrar y re-renderizar los gráficos
        // Esto requeriría que 'data' contenga los datos brutos o más granularidad.
        // Para este ejemplo, los gráficos se basan en los datos agregados por Python.
        // Si quieres que los filtros funcionen, tendrías que:
        // 1. Cargar el CSV completo en JS (usando PapaParse de nuevo)
        // 2. Implementar la lógica de filtrado y agregación en JS
        // 3. Llamar a renderCharts con los datos filtrados.
        alert("La funcionalidad de filtrado dinámico no está implementada en este ejemplo. Los gráficos muestran datos agregados por Python.");
    }

    roleFilter.addEventListener('change', applyFilters);
    experienceFilter.addEventListener('change', applyFilters);
});

