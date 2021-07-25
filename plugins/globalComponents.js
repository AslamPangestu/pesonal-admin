import Vue from 'vue'
import { Tooltip, Loading, Dialog, Upload } from 'element-ui'
import BaseInput from '@/components/Form/BaseInput'
import BaseDropdown from '@/components/Form/BaseDropdown'
import BaseFileInput from '@/components/Form/BaseFileInput'
import Card from '@/components/Cards/Card'
import BaseButton from '@/components/Form/BaseButton'
import BaseCheckbox from '@/components/Form/BaseCheckbox'
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

Vue.component(BaseInput.name, BaseInput)
Vue.component(BaseDropdown.name, BaseDropdown)
Vue.component(BaseFileInput.name, BaseFileInput)
Vue.component(Card.name, Card)
Vue.component(BaseCheckbox.name, BaseCheckbox)
Vue.component(BaseButton.name, BaseButton)
Vue.component(Upload.name, Upload)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Loading.directive)
