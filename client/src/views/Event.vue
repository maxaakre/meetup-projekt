<template>
  <div class="card" v-if="item">
    <ul class="product-list">
      <li class="list-item">
        <img
          class="product-image"
          :src="require('../assets/' + item.img + '.png')"
          @click="
            $router.push({
              title: 'event',
              params: { id: item.id, item },
            })
          "
          alt="product image"
        />

        <h2>{{ item.title }}</h2>

        <div class="content">
          <h4 class="desc">{{ item.desc }}</h4>
          <p class="info">{{ item.content }}</p>
          <div class="time">
            <p class="loc">{{ item.loc }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
          <h3 class="if" v-if="!auth.loggedIn">Login to attend meeting</h3>
        </div>
      </li>
    </ul>
    <div class="reviews">
      <p class="description">{{ item.eventDescription }}</p>
      <p class="attendees">
        <span class="lnr lnr-users" :class="{ attendees: isAttended }"></span>
        {{ isAttended ? item.attendees + 1 : item.attendees }}
        <button class="btn-attend" @click="attendToEvent">
          {{ isAttended ? "Leave" : "Attend" }}
        </button>
      </p>

      <form v-if="auth.loggedIn" @submit.prevent="newReview">
        <h2>Review</h2>
        <input
          required
          type="text"
          placeholder="Title"
          id="title"
          v-model="input.title"
          autocomplete="off"
        />
        <textarea
          required
          v-model="input.message"
          placeholder="what did you think of the event?"
        ></textarea>
        <button id="send">Send</button>
      </form>

      <ul class="review-container">
        <li
          class="review-item"
          v-for="(eventReview, index) in showCurrentReview(item.id)"
          :key="index"
        >
          <h2>{{ eventReview.review.title }}</h2>
          <p>{{ eventReview.review.message }}</p>
          <span class="review-date">{{
            eventReview.date | moment("dddd, MMMM Do YYYY, HH:mm:ss")
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      input: {
        title: null,
        message: null,
      },
    };
  },
  methods: {
    attendToEvent() {
      if (!this.$store.state.auth.loggedIn) {
        alert("Please log in to attend to event");
        return;
      }
      this.$store.commit("setEventData", this.item);
    },
    newReview() {
      if (!this.$store.state.auth.loggedIn) {
        alert("Please log in to attend to event");
        this.input = "";
        return;
      }
      this.$store.commit("setEventReview", {
        review: this.input,
        id: this.item.id,
        date: new Date(),
      });
      this.input = {};
    },
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
    isAttended() {
      return this.$store.state.eventList.find(
        (item) => item.id === this.item.id
      );
    },
    ...mapGetters(["showCurrentReview"]),
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;

  padding: 1rem 0;
  // display: flex;
  ul {
    li {
      list-style: none;
    }
    .product-image {
      padding: 0.5rem;
    }
    h4 {
      padding: 1rem;
      text-align: left;
    }
    p {
      padding: 0 1rem;
      text-align: left;
      line-height: 1.5;
    }
    .time {
      padding: 2rem 0;
      font-weight: bold;
    }
    .if {
      padding: 2.5rem;
    }
  }
  .reviews {
    form {
      display: flex;
      flex-flow: column;
      padding: 1rem;
    }
    .btn-attend {
      margin: 1rem;
    }
    #title {
      padding: 0.5rem;
    }
    textarea {
      padding: 1rem;
    }
    #send {
      padding: 0.8rem;
      align-items: center;
      border-radius: 5px;
      width: 50%;
      margin: auto;
      margin-top: 10px;
    }
  }
  span {
    color: red;
    &.attendees {
      color: green;
    }
  }
}
@media screen and (min-width: 768px) {
  .card {
    width: 70%;
    margin: auto;
  }
}
</style>
