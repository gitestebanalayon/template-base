<script setup>
import FormSearch from './page-sidebar/FormSearch.vue'

import InfoSocial from './page-sidebar/InfoSocial.vue'
import ThemeMode from './page-sidebar/ThemeMode.vue'
import DropNotifications from './page-sidebar/DropNotifications.vue'
</script>

<template>
    <!-- Page main -->
    <main class="page-wrapper">

        <!-- Page sidebar -->
        <div class="pt-3 pb-2 rounded-0 d-none d-lg-block">
            <div class="ms-3 me-3 navbar-nav justify-content-between flex-row order-md-last">

                <div class="d-flex gap-2">
                    <!-- Form search -->
                    <FormSearch />
                </div>

                <div class="d-flex align-items-center gap-3">
                    <div class="d-none d-md-flex gap-3">
                        <!-- Theme mode -->
                        <ThemeMode />

                        <!-- DropNotifications -->
                        <DropNotifications icon="ti ti-bell" name="Notificaciones" />
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

        <!-- Page header -->
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
        <div class="page-body mt-3">
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
                                    <div class="h1 mb-0 me-2">$4,300</div>
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
                                    <div class="h1 mb-3 me-2">6,782</div>
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
                                    <div class="h1 mb-3 me-2">2,986</div>
                                    <div class="me-auto">
                                        <span class="text-green d-inline-flex align-items-center lh-1">
                                            4% <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
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
                                                    132 Ventas
                                                </div>
                                                <div class="text-muted">
                                                    12 esperando pagos
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
                                                    78 Pedidos
                                                </div>
                                                <div class="text-muted">
                                                    32 enviados
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
                                                    623 Compartidas
                                                </div>
                                                <div class="text-muted">
                                                    16 hoy
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
                                                    132 Me gustas
                                                </div>
                                                <div class="text-muted">
                                                    21 hoy
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

</template>

<style scoped>
.card {
    border: none !important;
}

input {
    outline: none;
}
</style>./page-sidebar/DropDown.vue