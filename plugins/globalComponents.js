import Vue from 'vue'
import BaseInput from '@/components/Inputs/BaseInput'
import BaseDropdown from '@/components/BaseDropdown'
import Card from '@/components/Cards/Card'
import BaseButton from '@/components/BaseButton'
import BaseCheckbox from '@/components/Inputs/BaseCheckbox'
import { Input, InputNumber, Tooltip, Loading, Dialog } from 'element-ui'
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

Vue.component(BaseInput.name, BaseInput)
Vue.component(BaseDropdown.name, BaseDropdown)
Vue.component(Card.name, Card)
Vue.component(BaseCheckbox.name, BaseCheckbox)
Vue.component(BaseButton.name, BaseButton)
Vue.component(Input.name, Input)
Vue.component(InputNumber.name, InputNumber)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Loading.directive)
