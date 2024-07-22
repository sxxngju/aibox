import { h } from 'vue';
import type { IconSet, IconProps } from 'vuetify';

import iconSmile from '../components/svg/color/icon-smile.vue';
import iconWrite from '../components/svg/color/icon-write.vue';
import iconNoData from '../components/svg/color/icon-no-data.vue';
import iconDocument from '../components/svg/color/icon-document.vue';
import iconErrorPage from '../components/svg/color/icon-error-page.vue';
import iconPositive from '../components/svg/color/icon-positive.vue';
import iconNegative from '../components/svg/color/icon-negative.vue';
import iconPopularContents from '../components/svg/color/icon-popular-contents.vue';
import iconRecommendService from '../components/svg/color/icon-recommend-service.vue';
import iconReduction from '../components/svg/color/icon-reduction.vue';
import iconBlank from '../components/svg/color/icon-blank.vue';

import iconLogo from '../components/svg/solid/icon-logo.vue';
import iconArrowBack from '../components/svg/solid/icon-arrow-back.vue';
import iconArrowDown from '../components/svg/solid/icon-arrow-down.vue';
import iconArrowNext from '../components/svg/solid/icon-arrow-next.vue';
import iconArrowUp from '../components/svg/solid/icon-arrow-up.vue';
import iconCaretBack from '../components/svg/solid/icon-caret-back.vue';
import iconCaretDown from '../components/svg/solid/icon-caret-down.vue';
import iconClose from '../components/svg/solid/icon-close.vue';
import iconCopy from '../components/svg/solid/icon-copy.vue';
import iconDelete from '../components/svg/solid/icon-delete.vue';
import iconFirst from '../components/svg/solid/icon-first.vue';
import iconInfo from '../components/svg/solid/icon-info.vue';
import iconLast from '../components/svg/solid/icon-last.vue';
import iconLike from '../components/svg/solid/icon-like.vue';
import iconCaretNext from '../components/svg/solid/icon-caret-next.vue';
import iconNotice from '../components/svg/solid/icon-notice.vue';
import iconPlus from '../components/svg/solid/icon-plus.vue';
import iconPwView from '../components/svg/solid/icon-pw-view.vue';
import iconRecreate from '../components/svg/solid/icon-recreate.vue';
import iconSearch from '../components/svg/solid/icon-search.vue';
import iconPrint from '../components/svg/solid/icon-print.vue';
import iconFilter from '../components/svg/solid/icon-filter.vue';
import iconPlay from '../components/svg/solid/icon-play.vue';
import iconPlayRounded from '../components/svg/solid/icon-play-rounded.vue';
import iconPause from '../components/svg/solid/icon-pause.vue';
import iconAi from '../components/svg/solid/icon-ai.vue';
import iconMagicWand from '../components/svg/solid/icon-magic-wand.vue';
import iconMagicWandLg from '../components/svg/solid/icon-magic-wand-lg.vue';
import iconCheckboxOff from '../components/svg/solid/icon-checkbox-off.vue';
import iconCheckboxOn from '../components/svg/solid/icon-checkbox-on.vue';
import iconCheckSingleOff from '../components/svg/solid/icon-check-single-off.vue';
import iconCheckSingleOn from '../components/svg/solid/icon-check-single-on.vue';
import iconLogin from '../components/svg/solid/icon-login.vue';
import iconLogout from '../components/svg/solid/icon-logout.vue';
import iconEditInfo from '../components/svg/solid/icon-edit-info.vue';
import iconGoTop from '../components/svg/solid/icon-go-top.vue';
import iconPlainArrow from '../components/svg/solid/icon-plain-arrow.vue';
import iconShare from '../components/svg/solid/icon-share.vue';

const customSvgNameToComponent: any = {
  iconLogo,
  iconNoData,
  iconSmile,
  iconWrite,
  iconDocument,
  iconErrorPage,
  iconPositive,
  iconNegative,
  iconPopularContents,
  iconRecommendService,
  iconReduction,
  iconBlank,
  iconArrowBack,
  iconArrowDown,
  iconArrowNext,
  iconArrowUp,
  iconCaretBack,
  iconCaretDown,
  iconClose,
  iconCopy,
  iconDelete,
  iconFirst,
  iconInfo,
  iconLast,
  iconLike,
  iconCaretNext,
  iconNotice,
  iconPlus,
  iconPwView,
  iconRecreate,
  iconSearch,
  iconPrint,
  iconFilter,
  iconPlay,
  iconPlayRounded,
  iconPause,
  iconAi,
  iconMagicWand,
  iconMagicWandLg,
  iconCheckboxOff,
  iconCheckboxOn,
  iconCheckSingleOff,
  iconCheckSingleOn,
  iconLogin,
  iconLogout,
  iconEditInfo,
  iconGoTop,
  iconPlainArrow,
  iconShare
};

const icons: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon])
};

// aliases test 필요함.
const aliases: IconAliases = {
  complete: 'ph:check-circle',
  cancel: 'ph:x-circle',
  close: 'ph:x-circle',
  delete: 'ph:trash',
  clear: 'iconDelete',
  success: 'ph:check-circle',
  info: 'ph:info',
  warning: 'ph:warning',
  error: 'ph:x-circle',
  prev: 'iconArrowBack',
  next: 'iconArrowNext',
  checkboxOn: 'iconCheckboxOn',
  checkboxOff: 'iconCheckboxOff',
  checkboxIndeterminate: 'ph:square',
  delimiter: 'ph:circle',
  sort: 'ph:caret-up',
  expand: 'ph:caret-down',
  menu: 'heroicons:bars-2',
  subgroup: 'ph:caret-down',
  dropdown: 'ph:caret-down',
  radioOn: 'ph:radio-button-fill',
  radioOff: 'ph:circle',
  edit: 'ph:pencil-simple',
  ratingEmpty: 'ph:star',
  ratingFull: 'ph:star-fill',
  ratingHalf: 'ph:star-half-fill',
  loading: 'ph:spinner',
  first: 'ph:caret-double-left',
  last: 'ph:caret-double-right',
  unfold: 'ph:arrows-out',
  file: 'ph:file',
  plus: 'ph:plus',
  minus: 'ph:minus'
};

const custom: IconSet = {
  component: (props: IconProps) =>
    // Return render function
    h(MIcon, { size: '20', name: props.icon, tag: props.tag, disabled: props.disabled })
};

export { aliases, icons };
