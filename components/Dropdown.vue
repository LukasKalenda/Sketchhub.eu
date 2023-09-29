<template>
  <!-- Dropdown navbar menu -->
  <div class="">
    <div class="dropdown inline-block relative">
      <button
        class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span class="mr-1">Projekty</span>
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <ul class="dropdown-menu absolute hidden text-gray-700">
        <li class="">
          <NuxtLink
            to="#king-george"
            class="rounded-b bg-gray-200 hover:bg-gray-400 px-4 block whitespace-no-wrap"
            >King George</NuxtLink
          >
        </li>
        <li class="">
          <NuxtLink
            to="#ark-royal"
            class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            >Ark Royal</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
