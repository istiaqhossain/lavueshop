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
                          <router-link :to="{name:'home'}">
                            <h2 class="h2 mb-3 text-primary font-weight-bolder">Lavueshop</h2>  
                          </router-link>
                        </div>
                        <div class="text-center">
                          <h5 class="h5 text-gray-900 mb-4">Welcome Back!</h5>
                        </div>
                        <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                          {{ error }}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <ValidationObserver v-slot="{ handleSubmit }">
                        <form class="user" v-on:submit.prevent="handleSubmit(login)">
                          <div class="form-group">
                            <label class="text-gray-600">Email address</label>
                            <validation-provider name="Email" rules="required|email" v-slot="{ errors }">
                            <input type="email" class="form-control form-control-user" aria-describedby="emailHelp" v-model="email">
                            <span class="text-danger small d-block mt-2">{{ errors[0] }}</span>
                            </validation-provider>
                          </div>
                          <div class="form-group">
                            <label class="text-gray-600">Password</label>
                            <validation-provider name="Password" rules="required|min:6" v-slot="{ errors }">
                            <div class="password-wrap">
                              <input v-bind:type="password_field" class="form-control form-control-user" v-model="password">
                              <button type="button" v-on:click="togglePassType">
                                <i v-if="password_hide" class="fas fa-eye"></i>
                                <i v-if="!password_hide" class="fas fa-eye-slash"></i>
                              </button>
                            </div>
                            <span class="text-danger small d-block mt-2">{{ errors[0] }}</span>
                            </validation-provider>
                          </div>
                          <button v-bind:disabled="loading" type="submit" class="btn btn-primary btn-user btn-block">
                            <div v-if="loading" class="loading"></div>
                            <span v-if="!loading">Login</span>
                          </button>
                        </form>
                        </ValidationObserver>
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
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

extend('min', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: '{_field_} must be at least {length} characters'
});
extend('email', email);
extend('required', {
  ...required,
  message: '{_field_} is required!'
});

export default {
    name: 'Login',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
        return {
          email: '',
          password: '',
          error: '',
          loading: false,
          password_field: 'password',
          password_hide: true,
        }
    },
    methods: {
      login(){ 
        this.loading = true;
        var credentials = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch('retriveToken',credentials)
        .then(response => {
          this.loading = false;
          this.$router.push({name:'admin'});
        })
        .catch(error => {
          this.loading = false;
          this.error = 'Invalid email or password. Please try again.';
          this.password = '';
        });
      },
      togglePassType() {
        if(this.password_field == 'password') {
            this.password_field = 'text';
        } else {
            this.password_field = 'password';
        }
        this.password_hide = !this.password_hide;
      },
    },
}
</script>