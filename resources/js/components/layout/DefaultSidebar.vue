<template>
    <div>
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" v-bind:class="{toggled:isToggledSidebar}" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <router-link :to="{name:'home'}" class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-shipping-fast"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Lavueshop</div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Categories
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Food</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Sub Categories:</h6>
                <a class="collapse-item" href="">Fruits & Vegetables</a>
                <a class="collapse-item" href="">Breakfast</a>
                <a class="collapse-item" href="">Beverages</a>
                <a class="collapse-item" href="">Meat & Fish</a>
                <a class="collapse-item" href="">Snacks</a>
                <a class="collapse-item" href="">Dairy</a>
                <a class="collapse-item" href="">Frozen & Canned</a>
                <a class="collapse-item" href="">Bread & Bakery</a>
                <a class="collapse-item" href="">Baking Needs</a>
                <a class="collapse-item" href="">Cooking</a>
                <a class="collapse-item" href="">Diabetic Food</a>
            </div>
            </div>
        </li>

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle" v-on:click="toggleSidebar"></button>
        </div>

        </ul>
        <!-- End of Sidebar -->
    </div>
</template>

<script>
export default {
    name: 'DefaultSidebar',
    methods: {
        toggleSidebar() {
            this.$store.dispatch('toggleSidebar');
        }
    },
    computed: {
        isToggledSidebar() {
            return this.$store.getters.isToggledSidebar;
        }
    },
}
</script>