<template>
  <div>
    HOLI :D
    <!-- <v-menu
      v-model="show"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
      :disabled="disabled || readonly"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="formattedDate"
          :label="label"
          :prepend-inner-icon="icon || 'event'"
          filled
          readonly
          :required="required"
          :class="{'required': required}"
          @blur="$emit('blur')"
          v-on="on"
          :clearable="!readonly && clearable"
          :error="error"
          :error-message="errorMessage"
          :disabled="disabled"
          :block="block"
          :rules="rules"
          :loading="loading"
          :hint="hint"
          :persistentHint="persistentHint"
        >
          <template v-slot:append>
            <slot name="append">
            </slot>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        :min="firstAvailable"
        :max="lastAvailable"
        v-model="selectedDate"
        no-title
        color="primary"
        :locale="moment.locale()"
        @input="show = false"
        @blur="$emit('blur')"
        :first-day-of-week="moment.localeData().firstDayOfWeek()"
        :allowed-dates="allowedDates">
      </v-date-picker>
    </v-menu> -->
  </div>
</template>

<script>
import moment from 'moment'

// This component expects and emits all dates in YYYY-MM-DD format

// export default {
//   props: {
//     label: String,
//     icon: String,
//     initialValue: String,
//     firstAvailable: String,
//     lastAvailable: String,
//     readonly: Boolean,
//     disabled: Boolean,
//     clearable: Boolean,
//     dateOfBirth: Boolean,
//     error: Boolean,
//     errorMessage: String,
//     required: Boolean,
//     block: Boolean,
//     rules: Array,
//     allowedDates: Function,
//     loading: Boolean,
//     hint: String,
//     persistentHint: Boolean
//   },
//   data () {
//     return {
//       moment,
//       selectedDate: null,
//       show: false
//     }
//   },
//   created () {
//     moment.locale(this.locale)
//     if (this.initialValue) {
//       this.selectedDate = this.initialValue
//     }
//   },
//   computed: {
//     locale () {
//       return this.$i18n.locale
//     },
//     formattedDate: {
//       get () {
//         return this.selectedDate
//           ? moment(this.selectedDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
//           : null
//       },
//       set (value) {
//         this.selectedDate = value
//       }
//     }
//   },
//   watch: {
//     selectedDate (value) {
//       if (!this.initialValue || (this.initialValue && (value !== this.initialValue))) {
//         this.$emit('change', value)
//       }
//     },
//     show (val) {
//       if (this.dateOfBirth) {
//         val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
//       }
//     },
//     initialValue: {
//       immediate: true,
//       handler: function (val) {
//         if (val) {
//           this.selectedDate = val
//         }
//       }
//     }
//   }
// }
</script>
