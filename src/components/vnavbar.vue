<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/move.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                    style="height: 150px; max-height: none"
                >
            </b-navbar-item>
        </template>
        <template #start>

            <b-navbar-item href="#/">
            </b-navbar-item>
            
           <b-navbar-item href="#/serviços">
              <b-dropdown :triggers="['hover']" aria-role="list">
            <template #trigger>
                <b-button
                    label="Serviços"
                    type="is-info" outlined
                    icon-right="menu-down" />
            </template>
            <b-dropdown-item aria-role="listitem">Venda seu classificado sem sair de casa</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Lojistas e marketplaces</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Transporte de Doações</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Self storages</b-dropdown-item>
        </b-dropdown>
            </b-navbar-item>

            <b-navbar-item href="#/parceiros">
                Parceiros
            </b-navbar-item>



            <b-navbar-item href="#/sobre">
                Sobre a Move
            </b-navbar-item>
        </template>
    </b-navbar>
    
</template>