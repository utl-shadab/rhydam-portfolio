<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';

  let submitted = $state(false);
  let copied = $state(false);
  const email = 'hello@rhydampanda.example';

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    submitted = true;
  }

  async function copyEmail() {
    if (!navigator.clipboard) return;

    await navigator.clipboard.writeText(email);
    copied = true;
    window.setTimeout(() => {
      copied = false;
    }, 1600);
  }
</script>

<section class="section-pad pt-32">
  <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
    <div>
      <p class="eyebrow">Contact</p>
      <h1 class="display-title mt-5">Have a product, platform, or technical challenge in mind?</h1>
      <p class="body-large mt-7 max-w-xl text-[var(--text-muted)]">
        Send the context and I will respond with a practical next step: architecture direction, build scope,
        performance plan, or a clear technical path forward.
      </p>
      <div class="mt-10 grid gap-3 text-[var(--text-muted)]">
        <a href={`mailto:${email}`} data-cursor="Send">{email}</a>
        <button class="w-fit text-left text-sm text-[var(--accent)]" type="button" onclick={copyEmail} data-cursor="Copy">
          {copied ? 'Email copied' : 'Copy email'}
        </button>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank" data-cursor="Open">LinkedIn</a>
        <p>Available for remote product engineering work</p>
      </div>
    </div>

    <form class="grid gap-5" onsubmit={handleSubmit}>
      <label class="grid gap-2">
        <span class="text-sm text-[var(--text-muted)]">Name</span>
        <input class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="name" required />
      </label>
      <label class="grid gap-2">
        <span class="text-sm text-[var(--text-muted)]">Email</span>
        <input class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="email" type="email" required />
      </label>
      <label class="grid gap-2">
        <span class="text-sm text-[var(--text-muted)]">Project type</span>
        <select class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="type">
          <option>SaaS build</option>
          <option>Frontend development</option>
          <option>Backend/API development</option>
          <option>AI integration</option>
          <option>Performance optimization</option>
          <option>Technical consulting</option>
          <option>Design-to-code implementation</option>
        </select>
      </label>
      <label class="grid gap-2">
        <span class="text-sm text-[var(--text-muted)]">Budget range or timeline</span>
        <input class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="timeline" placeholder="Example: 8 weeks, MVP, or fixed launch date" />
      </label>
      <label class="grid gap-2">
        <span class="text-sm text-[var(--text-muted)]">Message</span>
        <textarea class="min-h-40 rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="message" required></textarea>
      </label>
      <div class="flex flex-wrap items-center gap-4">
        <Button type="submit" cursor="Send">Send context</Button>
        {#if submitted}
          <p class="text-sm text-[var(--accent)]" role="status">Received. I will respond with a practical next step.</p>
        {/if}
      </div>
    </form>
  </div>
</section>
