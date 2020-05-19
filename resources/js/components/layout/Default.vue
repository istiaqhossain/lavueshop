<template>
    <div>
        <div id="wrapper">
    
          <DefaultSidebar></DefaultSidebar>
    
          <!-- Content Wrapper -->
          <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

              <DefaultNav></DefaultNav>

              <!-- Begin Page Content -->
              <div class="container-fluid">

                <slot></slot>

              </div>
              <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>Copyright © Lavueshop {{ current_year }}</span>
                </div>
              </div>
            </footer>
            <!-- End of Footer -->

          </div>
          <!-- End of Content Wrapper -->

        </div>
        
    </div>
</template>

<script>
import DefaultSidebar from './DefaultSidebar'
import DefaultNav from './DefaultNav'

export default {
    name:'Default',
    components: {
      DefaultSidebar,
      DefaultNav
    },
    data() {
      return {
        current_year: new Date().getFullYear()
      }
    },
}
</script>