<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/navbar/Component.vue';
import Main from './components/main/Component.vue';

</script>

<template>

    <!-- Sidebar -->
    <NavBar />

    <!-- Page -->
    <Main />
    


    <main class="page-wrapper d-none">

        <!-- Page sidebar top -->
        <div class="pt-3 pb-2 rounded-0 d-none d-lg-block">
            <div class="nav-top container-xl d-flex justify-content-between">

                <div class="d-flex gap-2">
                    <form>
                        <div class="input-group">
                            <input type="text" class="form-control ps-3 bg-transparent" placeholder="Buscar"
                                aria-label="Buscar" aria-describedby="basic-addon1">
                            <button class="input-group-text bg-transparent"><i
                                    class="icon ti ti-search text-secondary"></i></button>
                        </div>
                    </form>
                </div>

                <div class="d-flex align-items-center gap-3">
                    <a href="?theme=dark" class="nav-link px-0 hide-theme-dark" title="Modo oscuro"
                        data-bs-toggle="tooltip" data-bs-placement="bottom">
                        <i class="icon ti ti-moon text-secondary"></i>
                    </a>
                    <a href="?theme=light" class="nav-link px-0 hide-theme-light" title="Modo blanco"
                        data-bs-toggle="tooltip" data-bs-placement="bottom">
                        <i class="icon ti ti-sun text-secondary"></i>
                    </a>
                    <button class="border-0 bg-transparent p-0">
                        <i class="icon ti ti-video text-secondary"></i>
                    </button>
                    <button class="border-0 bg-transparent p-0">
                        <i class="icon ti ti-radio text-secondary"></i>
                    </button>
                    <button class="border-0 bg-transparent p-0">
                        <i class="icon ti ti-phone text-secondary"></i>
                    </button>
                    <button class="border-0 bg-transparent p-0">
                        <i class="icon ti ti-users text-secondary"></i>
                    </button>
                    <button class="border-0 bg-transparent p-0">
                        <i class="icon ti ti-message text-secondary"></i>
                    </button>

                    <div class="dropdown">
                        <button href="#" class="p-0 bg-transparent border-0 d-flex position-relative"
                            data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications"
                            aria-expanded="false">
                            <i class="icon ti ti-bell text-secondary"></i>
                            <span class="badge bg-red position-absolute end-0"></span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                            <div class="card">
                                <div class="card-header">
                                    <i class="icon ti ti-bell text-secondary me-2"></i>
                                    <h3 class="card-title">Notificaciónes</h3>
                                </div>
                                <div class="list-group list-group-flush list-group-hoverable">
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span
                                                    class="status-dot status-dot-animated bg-red d-block"></span></div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block text-decoration-none">Ejemplo 1</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    Change deprecated html tags to text decoration classes (#29604)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions">
                                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span class="status-dot d-block"></span></div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block text-decoration-none">Ejemplo 2</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    justify-content:between ⇒ justify-content:space-between (#29734)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions show">
                                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-yellow"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span class="status-dot d-block"></span></div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block text-decoration-none">Ejemplo 3</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    Update change-version.js (#29736)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions">
                                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span
                                                    class="status-dot status-dot-animated bg-green d-block"></span>
                                            </div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block text-decoration-none">Ejemplo 4</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    Regenerate package-lock.json (#29730)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions">
                                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-nav flex-row">
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                                aria-label="Open user menu">
                                <span class="avatar avatar-sm rounded-circle"
                                    style="background-image: url(/src/assets/img/esteban.jpg)"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <a href="./profile.html" class="dropdown-item">Perfil</a>
                                <a href="#" class="dropdown-item">Información</a>
                                <a href="#" class="dropdown-item">Ayuda</a>
                                <div class="dropdown-divider"></div>
                                <a href="./settings.html" class="dropdown-item">Configuración</a>
                                <a href="./sign-in.html" class="dropdown-item">Cerrar sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page guie -->
        <header class="mt-2">
            <div class="container-xl">
                <div class="card">
                    <div class="p-3 d-flex align-items-center">
                        <i class="icon ti ti-home text-secondary me-2"></i>
                        <h2 class="page-title"> Inicio </h2>
                    </div>
                </div>
            </div>
        </header>

         <!-- Page body -->
        <div class="page-body">
            <div class="container-xl">
                <div class="row row-deck row-cards">
                    
                </div>
            </div>
        </div>

        <div class="page-body mt-3 d-none">
            <div class="container-xl">
                <div class="row row-deck row-cards">

                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center">
                                    <div class="subheader">Ventas</div>
                                    <div class="ms-auto lh-1">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Últimos 7 días</a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item active" href="#">Últimos 7 días</a>
                                                <a class="dropdown-item" href="#">Últimos 30 días</a>
                                                <a class="dropdown-item" href="#">Últimos 3 meses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h1 mb-3">75%</div>
                                <div class="d-flex mb-2">
                                    <div>Tasa de conversión</div>
                                    <div class="ms-auto">
                                        <span class="text-green d-inline-flex align-items-center lh-1">
                                            7% <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24"
                                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M3 17l6 -6l4 4l8 -8"></path>
                                                <path d="M14 7l7 0l0 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress" style="height: 30px;">
                                <div class="progress-bar" style="width: 75%; background: rgb(0, 140, 255);"
                                    role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                    aria-label="75% Complete">
                                    <span class="visually-hidden">75% Completado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center">
                                    <div class="subheader">Ganancia</div>
                                    <div class="ms-auto lh-1">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Últimos 7 días</a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item active" href="#">Últimos 7 días</a>
                                                <a class="dropdown-item" href="#">Últimos 30 días</a>
                                                <a class="dropdown-item" href="#">Últimos 3 meses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-baseline">
                                    <div class="h1 mb-0 me-2">$765</div>
                                    <div class="me-auto">
                                        <span class="text-green d-inline-flex align-items-center lh-1">
                                            8% <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24"
                                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M3 17l6 -6l4 4l8 -8" />
                                                <path d="M14 7l7 0l0 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="chart-revenue-bg" class="chart-sm"></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center">
                                    <div class="subheader">Nuevos clientes</div>
                                    <div class="ms-auto lh-1">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Últimos 7 días</a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item active" href="#">Últimos 7 días</a>
                                                <a class="dropdown-item" href="#">Últimos 30 días</a>
                                                <a class="dropdown-item" href="#">Últimos 7 meses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-baseline">
                                    <div class="h1 mb-3 me-2">32</div>
                                    <div class="me-auto">
                                        <span class="text-yellow d-inline-flex align-items-center lh-1">
                                            0% <!-- Download SVG icon from http://tabler-icons.io/i/minus -->
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24"
                                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l14 0" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="chart-new-clients" class="chart-sm"></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center">
                                    <div class="subheader">Usuarios activos</div>
                                    <div class="ms-auto lh-1">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Últimos 7 días</a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item active" href="#">Últimos 7 días</a>
                                                <a class="dropdown-item" href="#">Últimos 30 días</a>
                                                <a class="dropdown-item" href="#">Últimos 3 meses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-baseline">
                                    <div class="h1 mb-3 me-2">93</div>
                                    <div class="me-auto">
                                        <span class="text-green d-inline-flex align-items-center lh-1">
                                            4%
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24"
                                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M3 17l6 -6l4 4l8 -8" />
                                                <path d="M14 7l7 0l0 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="chart-active-users" class="chart-sm"></div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="row row-cards">
                            <div class="col-sm-6 col-lg-3">
                                <div class="card card-sm">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <span class="bg-green text-white avatar">
                                                    <i class="icon ti ti-currency-dollar"></i>
                                                </span>
                                            </div>
                                            <div class="col">
                                                <div class="font-weight-medium">
                                                    14 Ventas
                                                </div>
                                                <div class="text-muted">
                                                    3 esperando pagos
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card card-sm">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <span class="bg-yellow text-white avatar">
                                                    <i class="icon ti ti-shopping-cart"></i>
                                                </span>
                                            </div>
                                            <div class="col">
                                                <div class="font-weight-medium">
                                                    19 Pedidos
                                                </div>
                                                <div class="text-muted">
                                                    10 enviados
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card card-sm">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <span class="bg-vk text-white avatar">
                                                    <i class="icon ti ti-brand-x"></i>
                                                </span>
                                            </div>
                                            <div class="col">
                                                <div class="font-weight-medium">
                                                    128 Compartidas
                                                </div>
                                                <div class="text-muted">
                                                    7 hoy
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card card-sm">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <span class="bg-facebook text-white avatar">
                                                    <i class="icon ti ti-brand-facebook"></i>
                                                </span>
                                            </div>
                                            <div class="col">
                                                <div class="font-weight-medium">
                                                    55 Me gustas
                                                </div>
                                                <div class="text-muted">
                                                    11 hoy
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Resumen de tráfico</h3>
                                <div id="chart-mentions" class="chart-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Ubicaciones</h3>
                                <div class="ratio ratio-21x9">
                                    <div>
                                        <div id="map-world" class="w-100 h-100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

         <!-- Page footer -->
        <footer class="footer footer-transparent d-print-none d-none">
            <div class="container-xl">
                <div class="row text-center align-items-center flex-row-reverse">
                    <div class="col-12 col-auto mt-3 mt-lg-0">
                        <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item">
                                Copyright &copy; 2024
                                <a href="." class="link-secondary">Planta Física</a>. Todos los derechos reservados.
                            </li>
                            <li class="list-inline-item">
                                <a href="./changelog.html" class="link-secondary" rel="noopener">
                                    v1.0.0
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </main>



    <RouterView />
</template>

<style scoped>
.card {
    border: none !important;
}

input {
    outline: none;
}

table {
    width: 100%;
}

table thead tr {
    font-weight: 600;
}


table tbody tr td {
    padding: 0 10px;
}
</style>
