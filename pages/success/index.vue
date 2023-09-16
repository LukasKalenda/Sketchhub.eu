<template>
  <div>
    <Head>
      <Title>Odesláno! | Sketchub</Title>
    </Head>

    <div>
      <div
        class="flex items-end justify-center pt-10 text-center sm:block sm:p-0 p-4"
      >
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>

            <div class="mt-2 text-center">
              <h3
                class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                id="modal-title"
              >
                Zpráva byla odeslána!
              </h3>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Děkujeme za zaslání zprávy, jakmile to bude možné, ozveme se Vám
                zpět. V případě dalších dotazů nás neváhejte kontaktovat na emailu nebo jiným prostřednictvím. 
              </p>
            </div>
          </div>

          <div class="sm:flex sm:items-center flex items-center justify-center">
            <NuxtLink
              class="px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            >
              Hlavní stránka
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
