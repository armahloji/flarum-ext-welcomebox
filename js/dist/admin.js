(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat.app;var r=t.n(o);const a=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var n=t.n(a);function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}const c=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var l=t.n(c);const i=flarum.core.compat["forum/app"];var u=t.n(i);const f=flarum.core.compat["common/helpers/username"];var b=t.n(f);const p=flarum.core.compat["utils/formatNumber"];var d=t.n(p);const g=flarum.core.compat["helpers/listItems"];var x=t.n(g);const v=flarum.core.compat["components/AvatarEditor"];var w=t.n(v);const N=flarum.core.compat["components/SignUpModal"];var y=t.n(N);const h=flarum.core.compat["common/components/Button"];var k=t.n(h),j=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,s(e,o);var a=r.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e)},a.oncreate=function(t){},a.className=function(){return"welcomebox-widget"},a.icon=function(){return"fas fa-user-tie"},a.content=function(){var t=u().session.user,e=u().route("settings"),o=u().forum.attribute("imgUrl")||u().forum.attribute("baseUrl")+"/assets/extensions/justoverclock-welcomebox/no-avatar.png";if(!0===u().forum.attribute("justoverclock-welcomebox.UseWidget")){if(t)return t.data.attributes.lastSeenAt.slice(0,10),m("div",{className:"containerwb"},m("div",{className:"backgrwb"},k().component({icon:"fas fa-sign-out-alt logoutt",title:u().translator.trans("core.forum.header.log_out_button"),className:"Dropdown-toggle Button logwbox",onclick:u().session.logout.bind(u().session)}),[m("div",m("a",{href:u().route.user(t)},m("div",{className:"avatarwb"},w().component({user:t})))),m("div",{className:"contentwb"},m("div",{className:"textinfo"},u().translator.trans("flarum-ext-welcomebox.forum.wback"),m("br"),m("strong",b()(t))),m("div",{className:"cont"},m("div",{className:"circletop"},[m("a",{href:e,title:u().translator.trans("core.forum.settings.title")},m("i",{className:"menuicon fas fa-tasks"})),m("a",{href:u().route.user(t),title:u().translator.trans("flarum-ext-welcomebox.forum.tooltipProfile")},m("i",{className:"menuicon far fa-user"})),m("a",{href:u().route.user(t)+"/mentions",title:u().translator.trans("flarum-ext-welcomebox.forum.tooltipMentions")},m("i",{className:"menuicon fas fa-at"})),m("a",{href:u().route.user(t)+"/discussions",title:u().translator.trans("flarum-ext-welcomebox.forum.tooltipDisclist")},m("i",{className:"menuicon far fa-list-alt"}))]))),m("div",{className:"iconbadge"},x()(t.badges().toArray())),m(".ulwb",{className:"contentwb"},[m("li",[m("label",{className:"textinfo"},u().translator.trans("flarum-ext-welcomebox.forum.npost")),": ",m("strong",{className:"textinfo"},d()(t.commentCount()))]),m("li",[m("label",{className:"textinfo"},u().translator.trans("flarum-ext-welcomebox.forum.discussion")),": ",m("strong",{className:"textinfo"},d()(t.discussionCount()))])])]));if(!t&&!0===u().forum.attribute("HideGuestBox"))return m("div",{className:"containerwb"},m("div",{className:"backgrwbguest"},[m("img",{className:"guestavatarimg",src:o}),m("div",{className:"guesttext"},u().translator.trans("flarum-ext-welcomebox.forum.welcomeguest")),m("p",{className:"guestdesc"},u().translator.trans("flarum-ext-welcomebox.forum.notregistered")),m("button",{className:".SplitDropdown-button Button Button--primary hasIcon",type:"button",onclick:function(t,e){return u().modal.show(y(),e)}},u().translator.trans("core.forum.header.sign_up_link")),m("div",{className:"contentwb"})]))}},r}(l());r().initializers.add("justoverclock-welcomebox",(function(){var t;t=r(),(new(n())).add({key:"WelcomeBoxWdg",component:j,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-welcomebox"),r().extensionData.for("justoverclock-welcomebox").registerSetting({setting:"justoverclock-welcomebox.UseWidget",label:r().translator.trans("flarum-ext-welcomebox.admin.UseWidget"),type:"boolean"}).registerSetting({setting:"justoverclock-welcomebox.hide.guestbox",label:r().translator.trans("flarum-ext-welcomebox.admin.enablepostbox"),type:"boolean"}).registerSetting({setting:"justoverclock-welcomebox.imgUrl",name:"imgUrl",type:"URL",label:r().translator.trans("flarum-ext-welcomebox.admin.img"),help:r().translator.trans("flarum-ext-welcomebox.admin.img-help")})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map