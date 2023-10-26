import { Link } from "react-router-dom";

const Footer = () => {
    return (
        
<footer className="block bg-black text-white">
  <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_0.75fr] lg:gap-10">
      <div className="mr-0 flex max-w-[360px] grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10">
        <div className="">
          <a href="#" className="inline-block max-w-full">
          <Link className="text-[40px] font-['Staatliches']" to="/">T<span className="font-['Staatliches'] text-[#8c41f5] mx-[0.4px]">A</span>REK</Link>
          </a>
          <div className="mt-4 max-[479px]:w-full max-[479px]:max-w-full lg:mt-6 max-[991px]:pt-0 max-[991px]:pb-8">Phasellus a nulla in neque lacinia posuere. Etiam auctor facilisis augue vel gravida.</div>
        </div>
        <div className="mt-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 place-items-start gap-3 max-[991px]:mb-8">
          <a href="https://www.facebook.com/abdullahal.tarek.37" className="w-8 md:w-12 transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mx-auto flex max-w-[24px] flex-col items-center justify-center text-white">
            <div className="">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25C9.4791 2.25005 7.05619 3.22647 5.23968 4.97439C3.42317 6.72231 2.35426 9.10586 2.25723 11.6249C2.1602 14.1439 3.0426 16.6026 4.71928 18.4851C6.39595 20.3676 8.73657 21.5275 11.25 21.7214V14.2501H9C8.80109 14.2501 8.61032 14.1711 8.46967 14.0304C8.32902 13.8898 8.25 13.699 8.25 13.5001C8.25 13.3012 8.32902 13.1104 8.46967 12.9698C8.61032 12.8291 8.80109 12.7501 9 12.7501H11.25V10.5001C11.2509 9.70472 11.5673 8.94218 12.1297 8.37977C12.6921 7.81736 13.4546 7.501 14.25 7.50009H15.75C15.9489 7.50009 16.1397 7.57911 16.2803 7.71976C16.421 7.86041 16.5 8.05118 16.5 8.25009C16.5 8.449 16.421 8.63977 16.2803 8.78042C16.1397 8.92107 15.9489 9.00009 15.75 9.00009H14.25C13.8523 9.00054 13.471 9.15872 13.1898 9.43993C12.9086 9.72114 12.7505 10.1024 12.75 10.5001V12.7501H15C15.1989 12.7501 15.3897 12.8291 15.5303 12.9698C15.671 13.1104 15.75 13.3012 15.75 13.5001C15.75 13.699 15.671 13.8898 15.5303 14.0304C15.3897 14.1711 15.1989 14.2501 15 14.2501H12.75V21.7214C15.2634 21.5275 17.604 20.3676 19.2807 18.4851C20.9574 16.6026 21.8398 14.1439 21.7427 11.6249C21.6457 9.10587 20.5768 6.72232 18.7603 4.9744C16.9438 3.22649 14.5209 2.25006 12 2.25Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
          <a href="https://www.instagram.com/abdullah_al_tarek/" className="mx-auto flex max-w-[24px] flex-col items-center justify-center text-white w-8 md:w-12 transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"></path>
                <path d="M16.125 2.625H7.875C6.4831 2.62658 5.14865 3.18021 4.16443 4.16443C3.18021 5.14865 2.62658 6.4831 2.625 7.875V16.125C2.62658 17.5169 3.18021 18.8513 4.16443 19.8356C5.14865 20.8198 6.4831 21.3734 7.875 21.375H16.125C17.5169 21.3734 18.8513 20.8198 19.8356 19.8356C20.8198 18.8513 21.3734 17.5169 21.375 16.125V7.875C21.3734 6.4831 20.8198 5.14865 19.8356 4.16443C18.8513 3.18021 17.5169 2.62658 16.125 2.625ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4987 13.1931 16.0241 14.3369 15.1805 15.1805C14.3369 16.0241 13.1931 16.4987 12 16.5ZM16.875 8.25C16.6525 8.25 16.435 8.18402 16.25 8.0604C16.065 7.93679 15.9208 7.76109 15.8356 7.55552C15.7505 7.34995 15.7282 7.12375 15.7716 6.90552C15.815 6.68729 15.9222 6.48684 16.0795 6.3295C16.2368 6.17217 16.4373 6.06502 16.6555 6.02162C16.8738 5.97821 17.1 6.00049 17.3055 6.08564C17.5111 6.17078 17.6868 6.31498 17.8104 6.49998C17.934 6.68499 18 6.9025 18 7.125C18 7.42337 17.8815 7.70952 17.6705 7.9205C17.4595 8.13147 17.1734 8.25 16.875 8.25Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
          <a href="#" className="w-8 md:w-12 transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mx-auto flex max-w-[24px] flex-col items-center justify-center text-white">
            <div className="">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5952 12.5C22.1776 11.9882 22.5489 11.2781 22.6367 10.5078C22.7245 9.73741 22.5226 8.96195 22.0703 8.33223C21.618 7.70252 20.9476 7.26358 20.1895 7.10082C19.4315 6.93806 18.64 7.06312 17.969 7.45166V5.46873C17.9694 4.83375 17.7763 4.21374 17.4153 3.69136C17.0544 3.16897 16.5427 2.76902 15.9486 2.54484C15.3546 2.32066 14.7063 2.2829 14.0902 2.43658C13.4741 2.59027 12.9195 2.92811 12.5003 3.40505C11.9885 2.82261 11.2784 2.45136 10.5081 2.36355C9.73772 2.27573 8.96225 2.47762 8.33253 2.92995C7.70282 3.38227 7.26388 4.05267 7.10112 4.81073C6.93836 5.56878 7.06342 6.36028 7.45197 7.03123H5.46904C4.83406 7.03081 4.21405 7.22397 3.69166 7.58494C3.16927 7.94591 2.76933 8.45754 2.54515 9.05162C2.32097 9.64571 2.28321 10.294 2.4369 10.9101C2.59059 11.5262 2.92843 12.0808 3.40538 12.5C2.82293 13.0117 2.45168 13.7219 2.36386 14.4922C2.27603 15.2625 2.47792 16.038 2.93024 16.6677C3.38257 17.2975 4.05297 17.7364 4.81103 17.8992C5.56909 18.0619 6.36059 17.9369 7.03154 17.5483V19.5312C7.03113 20.1662 7.22428 20.7862 7.58525 21.3086C7.94622 21.831 8.45785 22.2309 9.05193 22.4551C9.64602 22.6793 10.2943 22.7171 10.9104 22.5634C11.5265 22.4097 12.0811 22.0718 12.5003 21.5949C13.012 22.1773 13.7222 22.5486 14.4925 22.6364C15.2629 22.7242 16.0383 22.5223 16.668 22.07C17.2978 21.6177 17.7367 20.9473 17.8995 20.1892C18.0622 19.4312 17.9372 18.6397 17.5486 17.9687H19.5315C20.1665 17.9691 20.7865 17.776 21.3089 17.415C21.8313 17.054 22.2312 16.5424 22.4554 15.9483C22.6796 15.3542 22.7174 14.7059 22.5637 14.0899C22.41 13.4738 22.0721 12.9192 21.5952 12.5ZM8.59404 5.46873C8.59404 5.05433 8.75866 4.6569 9.05168 4.36387C9.34471 4.07085 9.74214 3.90623 10.1565 3.90623C10.5709 3.90623 10.9684 4.07085 11.2614 4.36387C11.5544 4.6569 11.719 5.05433 11.719 5.46873V7.03123H10.1565C9.74228 7.03075 9.34513 6.86598 9.05221 6.57306C8.75928 6.28013 8.59451 5.88298 8.59404 5.46873ZM3.90654 10.1562C3.90701 9.74197 4.07178 9.34482 4.36471 9.05189C4.65763 8.75897 5.05478 8.5942 5.46904 8.59373H10.1565C10.5708 8.5942 10.9679 8.75897 11.2609 9.05189C11.5538 9.34482 11.7186 9.74197 11.719 10.1562V11.7187H5.46904C5.05478 11.7183 4.65763 11.5535 4.36471 11.2606C4.07178 10.9676 3.90701 10.5705 3.90654 10.1562ZM16.4065 19.5312C16.4065 19.9456 16.2419 20.3431 15.9489 20.6361C15.6559 20.9291 15.2584 21.0937 14.844 21.0937C14.4296 21.0937 14.0322 20.9291 13.7392 20.6361C13.4462 20.3431 13.2815 19.9456 13.2815 19.5312V17.9687H14.844C15.2583 17.9692 15.6554 18.134 15.9484 18.4269C16.2413 18.7198 16.4061 19.117 16.4065 19.5312ZM19.5315 16.4062H14.844C14.4298 16.4058 14.0326 16.241 13.7397 15.9481C13.4468 15.6551 13.282 15.258 13.2815 14.8437V13.2812H19.5315C19.9459 13.2812 20.3434 13.4458 20.6364 13.7389C20.9294 14.0319 21.094 14.4293 21.094 14.8437C21.094 15.2581 20.9294 15.6556 20.6364 15.9486C20.3434 16.2416 19.9459 16.4062 19.5315 16.4062Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
          <a href="#" className="w-8 md:w-12 transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mx-auto flex max-w-[24px] flex-col items-center justify-center text-white">
            <div className="">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9903 7.58366L21.0446 10.5294C20.4565 17.3537 14.7013 22.6562 7.81284 22.6562C6.39444 22.6562 5.22552 22.4314 4.33846 21.9878C3.62259 21.6299 3.32933 21.2457 3.25657 21.1365C3.19129 21.0386 3.14897 20.9271 3.13278 20.8106C3.11659 20.694 3.12694 20.5753 3.16307 20.4633C3.19919 20.3513 3.26015 20.2489 3.3414 20.1638C3.42265 20.0786 3.52208 20.0129 3.63227 19.9716C3.6574 19.9621 5.96119 19.0773 7.45016 17.3926C6.52401 16.7331 5.70889 15.9303 5.03546 15.0142C3.69678 13.1975 2.28096 10.0424 3.13793 5.32898C3.16344 5.18871 3.22684 5.05809 3.32128 4.95128C3.41571 4.84446 3.53758 4.76552 3.67367 4.72302C3.80975 4.68051 3.95488 4.67605 4.09332 4.71013C4.23177 4.7442 4.35824 4.81551 4.45906 4.91633C4.49348 4.95066 7.74442 8.15567 11.7186 9.19094L11.7191 8.59336C11.7275 7.34252 12.2322 6.14619 13.1224 5.26735C14.0125 4.3885 15.2152 3.89905 16.466 3.90658C17.2786 3.91783 18.0744 4.13966 18.7756 4.55039C19.4769 4.96111 20.0596 5.5467 20.4669 6.24995L23.4378 6.25C23.5924 6.25 23.7434 6.29581 23.8719 6.38166C24.0004 6.4675 24.1005 6.58951 24.1596 6.73226C24.2188 6.87501 24.2342 7.03209 24.2041 7.18364C24.174 7.33519 24.0996 7.4744 23.9903 7.58366Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start font-semibold">
        <div className="mb-4 ml-0 mr-0 max-[991px]: lg:ml-0 lg:mr-0">
          <div className="font-bold uppercase">Solution</div>
        </div>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Marketing</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Analytics</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Commerce</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Insights</a>
      </div>
      <div className="flex flex-col items-start font-semibold">
        <div className="mb-4 ml-0 mr-0 max-[991px]: lg:ml-0 lg:mr-0">
          <div className="font-bold uppercase">Support</div>
        </div>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Pricing</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Documentation</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Guides</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">API&nbsp;Status</a>
      </div>
      <div className="flex flex-col items-start font-semibold">
        <div className="mb-4 ml-0 mr-0 max-[991px]: lg:ml-0 lg:mr-0">
          <div className="font-bold uppercase">Company</div>
        </div>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">About</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Blog</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Jobs</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Press</a>
        <a href="#" className="py-2 text-sm font-normal text-white transition hover:text-[#302dd7]">Partners</a>
      </div>
      <div className="lg:flex flex-col items-start hidden">
        <div className="mb-4 flex max-w-[272px] items-start justify-start">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b62a7ee8efff72bc18bb3_MapPin-3.svg" alt="" className="mr-3 inline-block"/>
          <p className="text-sm">Feni 3800, Bangladesh</p>
        </div>
        <div className="mb-4 flex max-w-[272px] items-start justify-start">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b62a9be59b845bbcb04a0_EnvelopeSimple-4.svg" alt="" className="mr-3 inline-block"/>
          <p className="text-sm">afrantarek123456789@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;