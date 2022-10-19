<template>
  <div class="lgBox">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="loginForm"
    >
      <el-form-item label="username" prop="username">
        <el-input
          v-model="loginForm.username"
          type="username"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="lgBtn" type="primary" @click="submitForm(loginForm)"
          >登录</el-button
        >
        <el-button @click="resetForm(loginForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  submitForm(loginForm) {
    
  },
  resetForm() {},
  setup(props, ctx) {
    const data = reactive({
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "username is required",
            trigger: "blur",
          },
          {
            min: 6,
            max: 24,
            message: "username length must larger 6 and smaller 24",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "password is required",
            trigger: "blur",
          },
          {
            min: 6,
            max: 24,
            message: "password length must larger 6 and smaller 24",
            trigger: "blur",
          },
        ],
      },
    });

    const submitForm = (formEl: any | undefined) => {
      if (!formEl) return;
      formEl.validate((valid: any) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
.lgBox {
  width: 400px;
  padding: 30px;
  height: 120px;
  background: rgb(136, 111, 177);
  border: 1px solid rgb(133, 88, 88);
}
</style>