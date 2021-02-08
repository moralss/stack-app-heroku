<template>
  <div>
    <div class="q-pa-md">
      <q-select
        v-model='selectedDuration'
        :options="objectiveDuration"
        label="Objective Duration"
        :rules="[val => !!val || 'objective duration is required']"
      />
      <q-select
        v-model='selectedObject'
        :options="objectiveType"
        label="Objective Type"
        :rules="[val => !!val || 'objective type is required']"
      />
      <q-input
        ref="name"
        label="Objective Description"
        class="col q-pa-sm"
        v-model="description"
        :rules="[val => !!val || 'description is required']"
      />
      <q-btn
        type="submit"
        style="background:#ffffff;color: #757575"
        :loading="submitting"
        @click="saveObjective()"
        no-caps
        label="Submit"
        class="q-ma-sm q-mt-md q-pa-sm col sign-font"
      >
        <template v-slot:loading>
          <q-spinner-facebook color="primary" />
        </template>
      </q-btn>
      <!-- <q-btn
        @click="saveObjective()"
        label="submit"
      /> -->
      <!-- <template v-slot:loading>
        <q-spinner-facebook color="primary" />
      </template> -->

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'SetUpPage',
  data () {
    return {
      name: '',
      selectedDuration: '',
      selectedObject: '',
      description: '',
      objectiveDuration: ['One Week', 'One month', 'One Year'],
      objectiveType: ['Self Development', 'Financial Development'],
      objectiveList: [],
      date: '',
      submitting: false
    }
  },
  computed: {
    systemUserId () {
      return this.$store.getters.systemUserId
    }
  },
  methods: {
    async saveObjective () {
      this.submitting = true;
      if (this.selectedDuration == "One Week") {
        var endOfWeek = moment().endOf('week').toDate();
        this.date = endOfWeek;
      }

      if (this.selectedDuration == "One month") {
        var endOfmonth = moment().endOf('month').toDate();
        this.date = endOfmonth;
      }

      if (this.selectedDuration == "One Year") {
        var endOfyear = moment().endOf('year').toDate();
        this.date = endOfyear;
      }

      const objective = {
        duration: this.selectedDuration,
        type: this.selectedObject, description: this.description, date: this.date,
        isComplete: false,
        id: this.systemUserId
      }

      this.postValue(`/objective`, objective)
        .then((res) => {
          this.submitting = false;
          console.log("response", res)
          this.$router.replace('/viewer')
        })
        .catch((error) => {
          this.submitting = false;
          conosle.log("error", error)
        })
    }
  }
}
</script>
