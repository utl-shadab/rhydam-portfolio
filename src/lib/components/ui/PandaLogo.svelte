<script lang="ts">
  interface Props {
    class?: string;
  }

  let { class: className = "" }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox=" 0 0 480 460"
  class={className}
  fill="none"
>
  <!-- Background Face -->
  <path
    class="panda-face"
    fill="var(--accent)"
    d="M104.28,255.39 C94.1,296.08 100.19,333.94 126.04,360.87 C149.78,385.6 190.2,401.11 250,401.11 C307.45,401.11 347,386.8 371.08,363.75 C399.35,336.68 406.26,297.55 395.72,255.39 C374.9,172.12 347.15,109.66 250,109.66 C152.85,109.66 125.1,172.12 104.28,255.39z"
  />

  <!-- Ears -->
  <path
    fill="currentColor"
    d="M179.23,125.62 C170.69,111.97 155.51,102.89 138.23,102.89 C111.53,102.89 89.88,124.53 89.88,151.23 C89.88,172.39 103.48,190.37 122.4,196.92 M320.77,125.62 C329.31,111.97 344.49,102.89 361.77,102.89 C388.47,102.89 410.12,124.53 410.12,151.23 C410.12,172.39 396.52,190.37 377.6,196.92"
  />

  <!-- Eye Patches -->
  <g transform="translate(250, 346.5)">
    <g class="panda-eye-group">
      <path
        class="panda-eye-patch"
        fill="currentColor"
        d="M-79.686,-106.217 C-82.24,-95.725 -97.619,-85.526 -100.592,-76.473 C-105.016,-62.997 -95.68,-52.156 -86.445,-47.442 C-71.005,-39.561 -48.586,-52.574 -36.37,-76.508 C-24.154,-100.442 -26.766,-126.232 -42.206,-134.113 C-57.646,-141.994 -74.017,-129.501 -79.686,-106.217z"
      />
      <path
        class="panda-eye-patch"
        fill="currentColor"
        d="M79.686,-106.217 C82.24,-95.725 97.619,-85.526 100.592,-76.473 C105.016,-62.997 95.68,-52.156 86.445,-47.442 C71.005,-39.561 48.586,-52.574 36.37,-76.508 C24.154,-100.442 26.766,-126.232 42.206,-134.113 C57.646,-141.994 74.017,-129.501 79.686,-106.217z"
      />
      <!-- Smile Eyes White Arcs (⌒ shape) -->
      <path
        class="panda-smile-eye"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        fill="none"
        d="M-85, -80 Q-70, -100 -55, -80"
      />
      <path
        class="panda-smile-eye"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        fill="none"
        d="M55, -80 Q70, -100 85, -80"
      />
    </g>
  </g>

  <!-- Nose & Mouth -->
  <g transform="translate(250, 346.5)">
    <path
      class="panda-mouth"
      stroke="currentColor"
      stroke-width="7"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M0,-8.447 C0,-8.447 0,10.697 0,10.697 M-31.788,10.697 C-29.042,13.771 -24.672,16.844 -15.894,16.844 C-7.116,16.844 -4.308,14.371 0,10.697 M31.788,10.697 C29.042,13.771 24.672,16.844 15.894,16.844 C7.116,16.844 4.308,14.371 0,10.697"
    />
  </g>
</svg>

<style>
  svg {
    display: block;
    width: 100%;
    height: 100%;
    color: #100f0d;
    overflow: visible;
  }

  /* Animations */
  @keyframes panda-blink {
    0%,
    48%,
    52%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.12);
    }
  }

  @keyframes panda-smile-eyes {
    0%,
    48%,
    52%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes panda-mouth-smile {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(2px) scale(1.04);
    }
  }

  @keyframes panda-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  .panda-eye-patch {
    transform-origin: 0 -80px;
    animation: panda-blink 5s infinite;
  }

  .panda-smile-eye {
    animation: panda-smile-eyes 5s infinite;
    pointer-events: none;
  }

  .panda-mouth {
    transform-origin: center;
    animation: panda-mouth-smile 4s infinite ease-in-out;
  }

  .panda-face {
    transform-origin: center;
    /* animation: panda-float 6s infinite ease-in-out; */
  }

  /* Hover States */
  svg:hover .panda-eye-patch {
    animation-play-state: paused;
    transform: scaleY(0.12);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  svg:hover .panda-smile-eye {
    animation-play-state: paused;
    opacity: 1;
    transition: opacity 0.2s;
  }

  svg:hover .panda-mouth {
    transform: translateY(2px) scale(1.1);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
</style>
