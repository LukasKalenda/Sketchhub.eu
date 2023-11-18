<template>
  <div>
    <div class="input-group">
      <button class="sign-in-button">
       {{ value }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style>
.sign-in-button {
  width: 25%;
  height: 45px;
  border: none;
  color: #ffffff;
  background-color: #31285c;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 500;
  transition: 0.3s;
}

.sign-in-button:hover {
  background-color: #31283b;
}
</style>
