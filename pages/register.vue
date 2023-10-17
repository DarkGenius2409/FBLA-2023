<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse min-w-[33%]">
        <div
          class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 min-w-[100%]"
        >
          <form class="card-body">
            <h1 class="card-title text-5xl my-3">Register Here!</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="John"
                class="input input-bordered"
                required
                v-model="firstName"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                class="input input-bordered"
                required
                v-model="lastName"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                class="input input-bordered"
                required
                v-model="email"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="(###)-###-####"
                class="input input-bordered"
                required
                v-model="phoneNum"
              />
            </div>
            <div class="form-control mt-6">
              <NuxtLink to="/registered">
                <button class="btn btn-primary" @click="register">
                  Register
                </button>
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
    };
  },
  methods: {
    register() {
      setDoc(doc(db, "guests", uuidv4()), {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNum: this.phoneNum,
      }).then(() => {
        console.log("success");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
