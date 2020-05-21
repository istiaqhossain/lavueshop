<template>
    <div>
        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3" v-on:click="toggleSidebar">
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <li v-if="loggedIn" class="nav-item">
              <router-link :to="{name:'admin'}" class="nav-link">
                <span>Dashboard</span>
              </router-link>
            </li>
            
            <div class="topbar-divider d-none d-sm-block"></div>

            <li class="nav-item">
              <router-link v-if="!loggedIn" :to="{name:'login'}" class="nav-link">
                <i class="fas fa-sign-in-alt mr-2"></i> 
                <span>Login</span>
              </router-link>
              <router-link v-if="loggedIn" :to="{name:'logout'}" class="nav-link">
                <i class="fas fa-sign-out-alt mr-2"></i> 
                <span>Logout</span>
              </router-link>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->
    </div>
</template>

<script>
export default {
    name:'DefaultNav',
    methods: {
        toggleSidebar() {
            this.$store.dispatch('toggleSidebar');
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        },
    },
}
</script>