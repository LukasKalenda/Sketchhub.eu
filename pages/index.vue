<template>
  <div>
    <Head>
      <Title>Sketchub.eu</Title>
    </Head>
    <!-- Landing page -->
    <section class="bg-white shadow dark:bg-blue-950">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1
                class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
              >
                3D modely
              </h1>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Tato stránka obsahuje projekty dvou studentů, Adama Hurta a
                Lukáše Kalendy, kteří společně vytvářejí fyzické modely
                bitevnich lodí.
              </p>

              <button
                class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-purple-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                <NuxtLink to="/kontakt"> Kontakt </NuxtLink>
              </button>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="lg:max-w-sm"
              src="/img/landing_chart.svg"
              alt="World Network Ilustration"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- HMS King George V -->
    <section class="bg-white shadow dark:bg-blue-950" id="king-george">
      <h2
        class="text-center text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
        id="kurzy"
      >
        Kurzy
      </h2>
      <div class="container mx-auto">
        ahoj
      </div>
    </section>
  </div>
</template>
