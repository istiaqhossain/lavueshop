<template>
    <div>
        <div class="container">

          <!-- Outer Row -->
          <div class="row justify-content-center">

            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11">

              <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                  
                      <div class="p-5">
                        <div class="text-center">
                          <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form class="user" method="" action="">
                          <div class="form-group">
                            <label class="text-gray-600" for="emailExample">Email address</label>
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" autofocus>
                          </div>
                          <div class="form-group">
                            <label class="text-gray-600" for="passwordExample">Password</label>
                            <input type="password" class="form-control form-control-user" id="exampleInputPassword">
                          </div>
                          <button type="button" class="btn btn-primary btn-user btn-block">
                            Login
                          </button>
                        </form>
                        <hr>
                        <div class="text-center">
                          <router-link :to="{name:'home'}" class="">
                            <i class="fas fa-undo"></i>
                            <span class="d-block">Back to Shop</span>
                          </router-link>
                        </div>
                      </div>

                </div>
              </div>

            </div>

          </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
        }
    },
}
</script>