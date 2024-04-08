<script setup>
import Items from './NavBarOptionsItems.vue';
import ItemsSub from './NavBarOptionsItemsSub.vue';

</script>

<template>
    <div class="collapse navbar-collapse dropdown" id="sidebar-menu">
        <ul class="navbar-nav pt-lg-2 pb-lg-2 d-flex gap-1">
            <Items icon="ti ti-home" name="Inicio" routs="/" />
            <Items icon="ti ti-users" name="Usuario" routs="/users" badge="active" />

            <li>
                <ItemsSub name="Interface" icon="ti ti-brand-airtable" active="#active1" />
                <div id="active1" class="collapse rounded-2 bg-gray-700">
                    <ul class="navbar-nav d-flex gap-1">
                        <Items class="mt-1" icon="ti ti-box" name="Cajas" routs="/cajas" />
                        <Items icon="ti ti-category" name="Categorias" routs="/categorias" />
                        <Items icon="ti ti-file" name="Archivos" routs="/archivos" />

                        <li>
                            <ItemsSub name="Social" icon="ti ti-social" active="#active2" />
                            <div id="active2" class="collapse">
                                <ul class="navbar-nav d-flex gap-1">
                                    <Items class="mt-1" icon="ti ti-brand-messenger" name="Mensajes" routs="/mensajes" />
                                    <Items icon="ti ti-brand-facebook" name="Facebook" routs="/facebook" />
                                    <Items icon="ti ti-mail" name="Correos" routs="/correos" />

                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>

            <Items icon="ti ti-star" name="Favoritos" routs="/a" />
            <Items icon="ti ti-users" name="Personas" routs="/b" badge="active" />
            <Items icon="ti ti-circle" name="Puntos" routs="/c" />
            <Items icon="ti ti-radio" name="Radios" routs="/d" />
            <Items icon="ti ti-video" name="Videos" routs="/e" />
            <Items icon="ti ti-settings" name="Configuración" routs="/f" />

        </ul>
    </div>
</template>

<style scoped></style>