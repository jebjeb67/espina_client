<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col cols="12">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
              >
                Who we are?
              </h2>
              <h3
                class="text-h4 text-uppercase font-weight-thin text-center my-8"
              >
                We are the ESPINA Money Lending Company
              </h3>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Espina Money Lending is a local, Davao City-based company
                dedicated to providing you with fast, accessible, and reliable
                financial solutions. We understand that unexpected expenses can
                arise, and we're here to help you bridge the gap.
              </p>
              <blockquote class="text-h4 pa-5 my-4 font-weight-thin">
                Espina Money Lending is here to help. We're committed to being
                your trusted financial partner in Davao City.
              </blockquote>
              <p>
                Visit us today or contact us to learn more about how we can help
                you achieve your financial goals! Additional elements you can
                consider adding (optional): Hours of Operation Contact
                Information (phone number, email address) Website (if
                applicable) Remember: Always borrow responsibly and ensure you
                can repay the loan comfortably.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Here's what sets us apart: Fast and Efficient Service: We value
                your time. Our streamlined application process ensures you
                receive a quick decision on your loan request. Competitive Rates
                and Flexible Terms: We offer competitive rates and flexible loan
                terms to suit your individual needs and budget. Friendly and
                Local Support: Our friendly staff is committed to providing you
                with personalized service and answering all your questions.
                Transparent Process: We believe in clear communication. You'll
                always know exactly what to expect with our transparent loan
                terms and fees.
              </p>
            </v-col>
          </v-row>
        </v-container>
        <SectionsTeam :our-team="ourTeam" />

        <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-canva-studio-3277806.jpg"
              lazy-src="pexels-canva-studio-3277806.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Vision</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium. Doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-rfstudio-3810792.jpg"
              lazy-src="pexels-rfstudio-3810792.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Mission</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium. Doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. emo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos
              </p>
            </div>
          </v-col>
        </v-row>

        <SectionsTimeline />
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
          src: 'pexels-moose-photos-1036641.jpg',
          heading: ' About Us ',
        },
      ],
      ourTeam: [
        {
          name: 'John Churchill',
          position: 'Marketing Director',
          phone: '+1 (987) 1625346',
          email: 'john@example.com',
          photo: 'person-1.jpg',
        },
        {
          name: 'Fiona	Ross',
          position: 'Project Manager',
          phone: '+1 (987) 5894684',
          email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'Justin	Rees',
          position: 'VP Marketing',
          phone: '+1 (987) 6982456',
          email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'Amelia	Ogden',
          position: 'Communication Manager',
          phone: '+1 (987) 6982456',
          email: 'amelia@example.com',
          photo: 'person-4.jpg',
        },
        {
          name: 'Sebastian Bailey',
          position: 'Advertising Director',
          phone: '+1 (987) 6982456',
          email: 'sebastian@example.com',
          photo: 'person-5.jpg',
        },
        {
          name: 'Eric Sutton',
          position: 'Advertising Executive',
          phone: '+1 (987) 6982456',
          email: 'audrey@example.com',
          photo: 'person-6.jpg',
        },
        {
          name: 'Xia Yen',
          position: 'Advertising Manager',
          phone: '+1 (987) 6982456',
          email: 'christian@example.com',
          photo: 'person-7.jpg',
        },
        {
          name: 'Bernadette	Springer',
          position: 'Employee Relations Manager',
          phone: '+1 (987) 6982456',
          email: 'bernadette@example.com',
          photo: 'person-8.jpg',
        },
        {
          name: 'Elizabeth Newman',
          position: 'Project Manager',
          phone: '+1 (987) 6982456',
          email: 'elizabeth@example.com',
          photo: 'person-9.jpg',
        },
      ],
    }
  },
  head() {
    return {
      title: 'About Us',
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
