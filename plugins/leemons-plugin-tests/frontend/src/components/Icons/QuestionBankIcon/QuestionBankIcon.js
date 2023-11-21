import React from 'react';
import {
  QUESTION_BANK_ICON_PROP_TYPES,
  QUESTION_BANK_ICON_DEFAULT_PROPS,
} from './QuestionBankIcon.constants';

const QuestionBankIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.730714 0.006963C0.613066 0.0217302 0.467676 0.0785382 0.36386 0.150308C0.196964 0.265681 0.078358 0.445623 0.022774 0.667786L0.00367965 0.744077L0.00144045 4.04888C-0.000201153 6.46047 0.00137565 7.37168 0.00727245 7.42028C0.0531004 7.79796 0.317304 8.07196 0.715198 8.15445C0.769724 8.16575 1.00526 8.16679 4.01391 8.16908C6.19006 8.17073 7.28834 8.1691 7.35876 8.16412C7.59115 8.14767 7.75566 8.07679 7.90794 7.92753C8.05883 7.77962 8.14476 7.58675 8.16494 7.35066C8.17037 7.28716 8.17189 6.28714 8.17005 4.00568C8.16762 1.00478 8.16648 0.746842 8.15544 0.694354C8.09892 0.425672 7.94899 0.222805 7.71925 0.104149C7.65366 0.0702726 7.56293 0.0371382 7.4764 0.0154662C7.4297 0.0037662 7.22672 0.0029454 4.10391 0.0018294C2.22955 0.0011526 0.759147 0.0033918 0.730714 0.006963ZM0.986314 4.08488V7.18448H4.08591H7.18551V4.08488V0.985277H4.08591H0.986314V4.08488ZM15.7134 1.89382C15.438 1.90836 15.1619 2.01118 14.9183 2.19002C14.8193 2.26272 9.02953 8.04836 8.97793 8.12619C8.95878 8.15507 8.93659 8.19615 8.9286 8.21748C8.92062 8.23882 8.753 8.89883 8.55611 9.68418L8.19814 11.1121L8.19777 11.2021C8.19744 11.282 8.19958 11.2983 8.21687 11.3475C8.27456 11.5116 8.40178 11.6329 8.56071 11.6752C8.59254 11.6837 8.634 11.6876 8.69031 11.6875L8.77311 11.6872L10.2154 11.3257C11.7125 10.9505 11.6914 10.9562 11.7791 10.8978C11.824 10.8679 17.5995 5.09383 17.6647 5.01368C17.834 4.8055 17.9381 4.57418 17.9835 4.30511C18.0026 4.19137 18.0007 3.93553 17.9798 3.82208C17.9333 3.56949 17.8354 3.35175 17.6772 3.14888C17.6185 3.07362 16.7899 2.24798 16.7219 2.19701C16.5042 2.03378 16.2528 1.93073 15.9983 1.90033C15.9126 1.89009 15.823 1.88804 15.7134 1.89382ZM15.7427 2.87883C15.6871 2.88666 15.6399 2.90272 15.5771 2.9352C15.5301 2.9595 15.3346 3.153 12.6808 5.80148C10.3435 8.13412 9.8337 8.64628 9.82814 8.6673C9.78623 8.8259 9.36733 10.5135 9.36937 10.5155C9.37089 10.517 9.79139 10.4141 10.3038 10.2867L11.2355 10.0551L14.0284 7.268C15.5644 5.73508 16.8469 4.45172 16.8782 4.41608C16.9731 4.30813 17.0133 4.20639 17.0133 4.07408C17.0133 3.992 16.9983 3.92654 16.9626 3.8518L16.9328 3.78968L16.5142 3.37143C16.1127 2.97035 16.0933 2.95212 16.0415 2.9273C15.9495 2.8832 15.8389 2.86527 15.7427 2.87883ZM0.790208 9.83463C0.400572 9.86711 0.0741388 10.1724 0.0106852 10.5636C0.00131085 10.6214 -2.83528e-05 11.0414 4.47245e-07 13.9165C1.48472e-05 16.0796 0.00249165 17.2193 0.00725085 17.2501C0.06745 17.64 0.358827 17.9313 0.748714 17.9915C0.779516 17.9963 1.91924 17.9988 4.08231 17.9988C6.95735 17.9988 7.37739 17.9975 7.43515 17.9881C7.76444 17.9347 8.04049 17.6922 8.13216 17.3759C8.16999 17.2454 8.16831 17.3397 8.16831 15.3385C8.16831 13.5732 8.16759 13.4637 8.15561 13.417C8.12195 13.2859 8.01836 13.157 7.89831 13.0971C7.79741 13.0467 7.68015 13.0323 7.56578 13.0564C7.42685 13.0856 7.2912 13.1954 7.22754 13.3303C7.18322 13.4242 7.18577 13.3074 7.18564 15.2431L7.18551 17.0125H4.08591H0.986314V13.9129V10.8134L3.53331 10.8115L6.08031 10.8097L6.12711 10.7937C6.19881 10.7691 6.26201 10.7287 6.32146 10.6692C6.41765 10.573 6.45715 10.4838 6.46331 10.3489C6.46783 10.2497 6.45495 10.1835 6.41562 10.1037C6.35516 9.98108 6.24035 9.88657 6.09912 9.8432C6.06122 9.83156 5.89767 9.83072 3.45951 9.82979C2.02995 9.82924 0.828764 9.83141 0.790208 9.83463ZM2.60787 12.0878C2.47306 12.1231 2.35981 12.2158 2.29249 12.3459C2.25507 12.4181 2.24256 12.4752 2.24333 12.5701C2.2442 12.6791 2.26684 12.7527 2.32744 12.8437C2.33932 12.8615 2.58265 13.1102 2.86819 13.3963L3.38733 13.9164L2.85733 14.4475C2.28541 15.0205 2.29561 15.009 2.26195 15.1195C2.14705 15.4969 2.50192 15.8517 2.87929 15.7368C2.98983 15.7032 2.97832 15.7134 3.55134 15.1415L4.08236 14.6115L4.60254 15.1306C4.88863 15.4161 5.13729 15.6595 5.15511 15.6713C5.24778 15.7331 5.32011 15.755 5.43231 15.7554C5.52784 15.7556 5.57144 15.746 5.65191 15.7071C5.70179 15.6829 5.72519 15.6654 5.77836 15.6123C5.88107 15.5099 5.92565 15.4052 5.92539 15.2671C5.92515 15.1426 5.89391 15.053 5.8179 14.9587C5.79475 14.93 5.55194 14.683 5.27833 14.4098L4.78085 13.913L5.3127 13.3802L5.84456 12.8473L5.87437 12.7861C5.91501 12.7027 5.92785 12.6374 5.92331 12.5377C5.91715 12.4027 5.87765 12.3135 5.78146 12.2173C5.68527 12.1211 5.59639 12.0818 5.46037 12.0752C5.36105 12.0704 5.29464 12.0837 5.21065 12.1252C5.1524 12.1539 5.14354 12.1623 4.61863 12.6862L4.08574 13.2179L3.58903 12.7205C3.31583 12.4468 3.06881 12.204 3.04009 12.1809C2.9779 12.1308 2.91207 12.0979 2.84569 12.0838C2.77713 12.0693 2.6718 12.0711 2.60787 12.0878Z"
      fill={color}
      strokeWidth="0"
    /> */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.81885 1.13494C7.55148 1.14977 7.31008 1.25515 7.12502 1.43782C6.96344 1.59732 6.86968 1.77383 6.81984 2.01238C6.80865 2.06593 6.80766 2.55508 6.80568 8.97658L6.80356 15.8832H6.16287H5.5222L5.52025 12.3786C5.5184 9.03984 5.5177 8.87095 5.50538 8.81008C5.42158 8.39593 5.1227 8.0765 4.72285 7.97374C4.59748 7.94151 4.61184 7.94184 3.32497 7.94171C2.13434 7.94158 2.10135 7.94194 2.0189 7.95603C1.82493 7.9892 1.64557 8.0737 1.49793 8.20149C1.35699 8.32348 1.24684 8.48852 1.18849 8.66518C1.15952 8.75286 1.14527 8.82661 1.13717 8.93065C1.13305 8.98365 1.13031 10.3676 1.13022 12.4506L1.13005 15.8832L0.779053 15.8833C0.506727 15.8834 0.41744 15.8857 0.380699 15.8935C0.202427 15.9313 0.0440913 16.0914 0.0102801 16.2681C-0.00314068 16.3382 -0.00309748 16.4196 0.0103881 16.4844C0.0453945 16.6526 0.198308 16.8089 0.371346 16.8533C0.41852 16.8654 0.82555 16.866 8.99965 16.866C17.1738 16.866 17.5808 16.8654 17.628 16.8533C17.6552 16.8463 17.7038 16.827 17.736 16.8103C17.8531 16.7498 17.9618 16.6135 17.9852 16.4978C17.9899 16.4746 17.9967 16.45 18.0003 16.4431C18.0095 16.4256 18.0089 16.2987 17.9997 16.3044C17.9956 16.3069 17.9925 16.3011 17.9925 16.2912C17.9925 16.2814 17.9857 16.2513 17.9775 16.2241C17.9346 16.0828 17.8101 15.9565 17.6613 15.9035C17.615 15.887 17.6105 15.8868 17.2419 15.8846L16.8693 15.8825L16.869 10.751C16.8689 7.7099 16.8661 5.58281 16.8622 5.52933C16.851 5.37622 16.8199 5.25901 16.7563 5.13016C16.625 4.864 16.396 4.66991 16.1107 4.5829C15.9641 4.53819 16.0505 4.541 14.7309 4.53795C13.8935 4.53602 13.4995 4.53757 13.4421 4.54303C13.185 4.56746 12.9724 4.66793 12.7867 4.85278C12.6403 4.9984 12.5477 5.17025 12.4976 5.38918L12.4811 5.46118L12.4791 10.6722L12.4771 15.8832H11.8364H11.1957L11.1936 8.97658C11.1916 2.55508 11.1907 2.06593 11.1795 2.01238C11.1494 1.86845 11.1041 1.75084 11.0358 1.63933C10.9867 1.55911 10.9471 1.50974 10.8743 1.43782C10.7197 1.28526 10.5322 1.18955 10.3035 1.14646C10.2482 1.13604 10.115 1.1347 9.05005 1.13377C8.39467 1.13321 7.84063 1.13373 7.81885 1.13494ZM7.83479 2.12763C7.81944 2.13429 7.80741 2.14677 7.80059 2.16311C7.79137 2.18517 7.79005 3.04332 7.79005 9.03575V15.8832H8.99965H10.2093V9.03575C10.2093 3.04024 10.2079 2.18518 10.1987 2.16309C10.178 2.11359 10.2604 2.11675 8.99808 2.11706C8.02679 2.1173 7.85495 2.11886 7.83479 2.12763ZM13.5096 5.52943C13.5013 5.53281 13.4875 5.54439 13.479 5.55515L13.4637 5.57472V10.7289V15.8832H14.6733H15.8829V10.7385C15.8829 6.30857 15.8814 5.59051 15.8726 5.56942C15.8514 5.51875 15.9437 5.52233 14.6718 5.52283C14.041 5.52308 13.518 5.52606 13.5096 5.52943ZM2.14357 8.94899L2.12005 8.97L2.11822 12.4266L2.1164 15.8832H3.32602H4.53565V12.4339C4.53565 9.90764 4.5335 8.98042 4.52761 8.9689C4.52319 8.96025 4.51266 8.94758 4.50421 8.94073C4.4898 8.92906 4.41702 8.92829 3.32797 8.92813L2.16708 8.92798L2.14357 8.94899ZM0.00228092 16.3764C0.00230252 16.416 0.00351212 16.4313 0.00496652 16.4103C0.00642812 16.3894 0.00641372 16.357 0.00493772 16.3383C0.00345452 16.3197 0.00226652 16.3368 0.00228092 16.3764Z"
      fill={color}
      strokeWidth="0"
    />
  </svg>
);

QuestionBankIcon.defaultProps = QUESTION_BANK_ICON_DEFAULT_PROPS;
QuestionBankIcon.propTypes = QUESTION_BANK_ICON_PROP_TYPES;

QuestionBankIcon.displayName = 'QuestionBankIcon';
export default QuestionBankIcon;
export { QuestionBankIcon };
