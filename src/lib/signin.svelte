<main class="auth-form">
    <section>
        <form on:submit|preventDefault="{handleLogin}">
            <div class="frame">
                <div class="mb-2 px-3">
                    <label class="label" for="">E-mail</label>
                    <input bind:value="{email}" class="input" type="email" placeholder="x@y.z" />
                </div>
                <div class="mb-2 px-3">
                    <label class="label" for="">Password</label>
                    <input bind:value="{password}" class="input" type="password" placeholder="***" />
                </div>
                <div class="mb-2 px-3">
                    <label class="label opacity-0" for="">Login</label>
                    <button class="button">Sign In</button>
                </div>
            </div>
        </form>
    </section>
</main>

<style global>
    .auth-form {
        @apply bg-contain bg-bottom bg-no-repeat;
        background-image: url("https://nwp-cgn.de/img/poser/programmer.svg");
    }

    .auth-form form {
        @apply animate-animated animate-rotateIn;
    }
    .auth-form > section {
        @apply flex flex-col w-full h-full max-w-sm pt-16 mx-auto p-2;
    }
    .auth-form .frame {
        @apply flex flex-col -mx-3 p-4 border-5 border-gray-500 rounded-xl shadow-2xl bg-amber-400 bg-opacity-90;
    }
    .auth-form .input {
        @apply appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none;
    }
    .auth-form .label {
        @apply block mb-1 text-xs text-gray-700 uppercase font-thin;
    }
    .auth-form .button {
        @apply inline-block w-full py-4 px-8 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow;
    }
    .auth-form .button[disabled] {
        @apply text-gray-400 bg-gray-200 hover:bg-gray-200 shadow-none cursor-not-allowed;
    }
</style>
