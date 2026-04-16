<script lang="ts">
  import Skeleton from 'boneyard-js/svelte';
  import CTA from '$lib/components/sections/CTA.svelte';
  import FeaturedProjects from '$lib/components/sections/FeaturedProjects.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Intro from '$lib/components/sections/Intro.svelte';
  import Marquee from '$lib/components/sections/Marquee.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Stats from '$lib/components/sections/Stats.svelte';
  import Testimonials from '$lib/components/sections/Testimonials.svelte';
  import Seo from '$lib/components/layout/Seo.svelte';
  import ProjectGridSkeleton from '$lib/components/loader/ProjectGridSkeleton.svelte';
  import SectionSkeleton from '$lib/components/loader/SectionSkeleton.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />
<Hero eyebrow={data.hero.eyebrow} title={data.hero.title} image={data.hero.image} />
<Intro text={data.intro} />

{#await data.featuredProjects}
  <section class="section-pad">
    <Skeleton name="home-featured-projects" loading={true} animate="shimmer">
      {#snippet fallback()}
        <ProjectGridSkeleton />
      {/snippet}
      <ProjectGridSkeleton />
    </Skeleton>
  </section>
{:then featuredProjects}
  <Skeleton name="home-featured-projects" loading={false} animate="shimmer">
    <FeaturedProjects projects={featuredProjects} />
  </Skeleton>
{/await}

<Marquee />

{#await data.services}
  <section class="section-pad">
    <Skeleton name="home-services" loading={true} animate="shimmer">
      {#snippet fallback()}
        <SectionSkeleton rows={5} />
      {/snippet}
      <SectionSkeleton rows={5} />
    </Skeleton>
  </section>
{:then services}
  <Skeleton name="home-services" loading={false} animate="shimmer">
    <Services {services} />
  </Skeleton>
{/await}

{#await data.stats}
  <section class="section-pad">
    <Skeleton name="home-stats" loading={true} animate="shimmer">
      {#snippet fallback()}
        <SectionSkeleton rows={2} />
      {/snippet}
      <SectionSkeleton rows={2} />
    </Skeleton>
  </section>
{:then stats}
  <Skeleton name="home-stats" loading={false} animate="shimmer">
    <Stats {stats} />
  </Skeleton>
{/await}

{#await data.testimonials}
  <section class="section-pad">
    <Skeleton name="home-testimonials" loading={true} animate="shimmer">
      {#snippet fallback()}
        <SectionSkeleton rows={4} />
      {/snippet}
      <SectionSkeleton rows={4} />
    </Skeleton>
  </section>
{:then testimonials}
  <Skeleton name="home-testimonials" loading={false} animate="shimmer">
    <Testimonials {testimonials} />
  </Skeleton>
{/await}

<CTA />
