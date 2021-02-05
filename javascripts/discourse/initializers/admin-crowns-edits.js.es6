import { withPluginApi } from "discourse/lib/plugin-api";
import { iconNode } from "discourse-common/lib/icon-library";

export default {
  name: "mobile-topic-floating-reply-edits",
  initialize() {
    withPluginApi("0.8.32", (api) => {
      api.reopenWidget("poster-name", {
        posterGlyph(attrs) {
          if (attrs.admin) {
            return iconNode("crown", {
              title: I18n.t("user.admin_tooltip"),
            });
          }
          if (attrs.moderator || attrs.groupModerator) {
            return iconNode("shield-alt", {
              title: I18n.t("user.moderator_tooltip"),
            });
          }
        },
      });
    });
  },
};
