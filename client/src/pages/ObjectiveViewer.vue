<template>
  <div class="q-pa-md">
    <h6> Objective list</h6>

    <q-dialog
      v-model="prompt"
      persistent
    >
      <q-card style="min-width: 560px">
        <q-card-section>
          <div class="text-h6">Edit Objective</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-select
            v-model='selectedObject.duration'
            :options="objectiveDuration"
            label="Objective Duration"
            :rules="[val => !!val || 'objective duration is required']"
          />

          <q-select
            v-model='selectedObject.type'
            :options="objectiveType"
            label="Objective Type"
            :rules="[val => !!val || 'objective type is required']"
          />

          <q-input
            dense
            v-model='selectedObject.description'
            autofocus
          />
        </q-card-section>

        <q-card-actions
          align="right"
          class="text-primary"
        >
          <q-btn
            flat
            label="Cancel"
            v-close-popup
          />
          <!-- <q-btn
            flat
            @click="saveEditedValues()"
            label="Submit"
            v-close-popup
          /> -->

          <q-btn
            type="submit"
            style="background:#ffffff;color: #757575"
            :loading="submitting"
            @click="saveEditedValues()"
            no-caps
            label="Submit"
          >
            <template v-slot:loading>
              <q-spinner-facebook color="primary" />
            </template>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-list bordered>
      <q-item
        clickable
        v-ripple
        v-for="objective in objectiveList"
        :key="objective.id"
        @click="editObject(objective)"
      >
        <q-item-section>{{objective.duration}}</q-item-section>
        <q-item-section>
          {{objective.type}}
        </q-item-section>
        <q-item-section>
          {{objective.description}}
        </q-item-section>
        <q-item-section>
          {{objective.date_due}}
        </q-item-section>
        <div class="q-gutter-sm">
          <q-checkbox v-model="objective.isComplete" />
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ObjectiveViewer',
  data () {
    return {
      objectiveList: [],
      isLoading: true,
      prompt: false,
      selectedObject: {},
      submitting: false,
      objectiveType: ['Self Development', 'Financial Development'],
      objectiveDuration: ['One Week', 'One month', 'One Year'],
    }
  },
  computed: {
    systemUserId () {
      return this.$store.getters.systemUserId
    }
  },
  methods: {
    editObject (objective) {
      this.prompt = true
      this.selectedObject = objective
      return
    },
    saveEditedValues () {
      this.submitting = true
      this.putValue(`/objective/${this.selectedObject.id}`, this.selectedObject)
        .then((res) => {
          this.submitting = false
          this.prompt = false
          this.showSuccess("succefully saved")
        })
        .catch((error) => {
          console.log(error)
          this.submitting = false
        })

      return
    }
  },
  created () {
    this.getValues(`/objective/${this.systemUserId}`).then((res) => {
      this.objectiveList.push(...res)
    })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
