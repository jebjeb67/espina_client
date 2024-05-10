<template>
  <section id="hero">
    <v-carousel
      height="calc(100vh - 64px)"
      dark
      cycle
      show-arrows-on-hover
      draggable="true"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="carousel.src"
        class="gradient-fill"
      >
        <v-container fill-height>
          <div style="max-width: 600px">
            <div
              class="text-md-h2 mb-3 text-sm-h3 text-h5 font-weight-black white--text"
            >
              {{ carousel.heading.toUpperCase() }}
            </div>
            <p class="mb-5 white--text">{{ carousel.subHeading }}</p>
            <v-btn :x-large="$vuetify.breakpoint.smAndUp" class="my-3 primary"
              >Get Started</v-btn
            >
            <span class="mx-2 my-4"></span>
            <v-btn
              :x-large="$vuetify.breakpoint.smAndUp"
              text
              class="my-3"
              outlined
              dark
              ><v-icon left large color="primary">mdi-play</v-icon>Learn
              More</v-btn
            >
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading: 'Fast, Reliable, and Secure',
          subHeading:
            'Do you need a quick financial boost to cover unexpected expenses, invest in a dream, or bridge a temporary gap? RPE Money Lending is here to help. We offer a streamlined loan application process, with quick approvals and fast access to funds. Our commitment to security ensures your information is always protected. With RPE, you get the reliability and speed you need, along with the peace of mind that comes with a secure lender.',
        },
        {
          src: 'pexels-peter-olexa-4012966.jpg',
          heading: 'Flexible Solutions for Every Need',
          subHeading:
            'Not all financial needs are created equal. At RPE Money Lending, we understand that. That is why we offer a variety of loan options to fit your specific situation. Whether you require a smaller loan for a short-term need or a larger one for a long-term goal, we have a solution for you. Our flexible repayment terms allow you to manage your loan comfortably,  ensuring a stress-free borrowing experience.',
        },
        {
          src: 'pexels-thirdman-5961072.jpg',
          heading: ' Local Expertise, National Strength ',
          subHeading:
            'RPE Money Lending is a Davao-based company,  deeply rooted in the Davao community. We understand the unique financial needs of our local residents and businesses. However, our reach extends beyond Davao. We leverage our national network to  provide you with access to competitive rates and a wider range of loan options. With RPE, you get the benefit of local expertise combined with the strength and resources of a national lender.',
        },
        {
          src: 'pexels-andrea-piacquadio-3830745.jpg',
          heading: ' Committed to Your Success ',
          subHeading:
            'At RPE Money Lending, we believe in your success. Were more than just a lender; were your financial partner. Our dedicated team is here to guide you through the loan process, answer your questions, and provide you with the support you need. We want to see you achieve your financial goals, and we will work with you to create a personalized loan plan that sets you on the path to success.',
        },
      ],
    }
  },
}
</script>

<style>
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.75),
    rgba(5, 11, 31, 0.65)
  );
}
</style>
