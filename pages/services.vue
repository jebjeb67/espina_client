<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16">
          <h2
            class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
          >
            What we do
          </h2>
          <p class="text-h6 text-uppercase font-weight-light text-center my-16">
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse
            condimentum porttitor cursumus.
          </p>
          <v-row>
            <v-col
              v-for="(card, index) in cards"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              xl="2"
              class="text-center"
            >
              <v-avatar size="80" class="mb-5" color="primary">
                <v-icon dark large>
                  {{ card.icon }}
                </v-icon>
              </v-avatar>
              <div
                class="title text-uppercase mt-1 mb-4"
                v-text="card.title"
              ></div>
              <p v-text="card.text"></p>
              <v-row no-gutters>
                <v-col cols="12"> </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <SectionsPricing />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-ekaterina-bolovtsova-4048767.jpg',
          heading: ' Services ',
        },
      ],
      cards: [
        {
          title: 'Very Good Loan',
          text: '',
          icon: 'mdi-material-design',
        },
        {
          title: 'Loan with ease',
          text: '',
          icon: 'mdi-desktop-mac',
        },
        {
          title: 'Fast Loan',
          text: '',
          icon: 'mdi-eye',
        },
        {
          title: 'Fast Transaction',
          text: '',
          icon: 'mdi-speedometer',
        },
        {
          title: 'Unlimited Loan',
          text: ' ',
          icon: 'mdi-infinity',
        },
        {
          title: 'Premium Loaners',
          text: '',
          icon: 'mdi-slide',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>
