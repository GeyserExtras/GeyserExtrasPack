import { Modify, JsonUIElement, FontType, UI, ButtonMapping } from 'jsonui-scripting';

// Cooldown UI Changes
Modify.HudScreen('hud_title_text/subtitle_frame/subtitle').setProperty({
    offset: [-1, 19],
    shadow: false,
    font_size: "normal"
});
Modify.HudScreen('hud_title_text/title_frame/title').setProperty({ font_size: "large" });
// Gamemode Switcher style Emote UI
Modify.PersonaCommon('emote_selection_wheel/default_state').setProperty({ texture: "textures/ui/gamemode_switcher_base", size: ["100%", "100%"] })
Modify.PersonaCommon('emote_wheel_slot_content/image_0').setProperty({ size: ["100%", "100%"] })
Modify.PersonaCommon('emote_image/empty').setProperty({ size: ["18.85px", "18.85px"] })
Modify.PersonaCommon('emote_image/emote_preview').setProperty({ size: ["18.85px", "18.85px"] })
Modify.PersonaCommon('emote_wheel_panel/emote_wheel_content_panel').setProperty({ size: [125, 75] })

Modify.PersonaCommon('emote_selection_wheel').setProperty({
    inner_radius: 1.0,
    outer_radius: 2.0,
})
Modify.PersonaCommon('emote_selection_wheel/emote_slot_0_content').setProperty({
    $wheel_state_texture: "textures/ui/gamemode_switcher_0",
    $emote_touch_label_offset: [0, "50%y + 50% + 3px"],
    $emote_image_offset: ["-46px", "3px"]
})
Modify.PersonaCommon('emote_selection_wheel/emote_slot_1_content').setProperty({
    $wheel_state_texture: "textures/ui/gamemode_switcher_1",
    $emote_touch_label_offset: [0, "50%y + 50% + 3px"],
    $emote_image_offset: ["-15px", "3px"]
})
Modify.PersonaCommon('emote_selection_wheel/emote_slot_2_content').setProperty({
    $wheel_state_texture: "textures/ui/gamemode_switcher_2",
    $emote_touch_label_offset: [0, "50%y + 50% + 3px"],
    $emote_image_offset: ["16px", "3px"]
})
Modify.PersonaCommon('emote_selection_wheel/emote_slot_3_content').setProperty({
    $wheel_state_texture: "textures/ui/gamemode_switcher_3",
    $emote_touch_label_offset: [0, "50%y + 50% + 3px"],
    $emote_image_offset: ["47px", "3px"]
})
Modify.PersonaCommon('emote_wheel_panel/emote_name').setProperty({ font_type: FontType.Default, font_scale_factor: 1.0, size: [125, 32], offset: [0, "-16px"], max_size: [125, 32] })

Modify.PersonaCommon('gamepad_hotkey_helpers/quick_select_gamepad_helpers/gamepad_x').setProperty({ layer: 11, offset: ["-55px", "16px"], size: [8, 8] })
Modify.PersonaCommon('gamepad_hotkey_helpers/quick_select_gamepad_helpers/gamepad_y').setProperty({ layer: 12, offset: ["-25px", "16px"], size: [8, 8] })
Modify.PersonaCommon('gamepad_hotkey_helpers/quick_select_gamepad_helpers/gamepad_a').setProperty({ layer: 13, offset: ["7px", "16px"], size: [8, 8] })
Modify.PersonaCommon('gamepad_hotkey_helpers/quick_select_gamepad_helpers/gamepad_b').setProperty({ layer: 14, offset: ["38px", "16px"], size: [8, 8] })

Modify.PersonaCommon('keyboard_hotkey_helpers/keyboard_1').setProperty({ layer: 11, offset: ["-51px", "21px"], size: [8, 8] })
Modify.PersonaCommon('keyboard_hotkey_helpers/keyboard_2').setProperty({ layer: 12, offset: ["-20px", "21px"], size: [8, 8] })
Modify.PersonaCommon('keyboard_hotkey_helpers/keyboard_3').setProperty({ layer: 13, offset: ["11px", "21px"], size: [8, 8] })
Modify.PersonaCommon('keyboard_hotkey_helpers/keyboard_4').setProperty({ layer: 14, offset: ["42px", "21px"], size: [8, 8] })

Modify.PersonaCommon('emote_image/emote_preview').setProperty({ size: [16, 16] })

Modify.PersonaCommon('gamepad_hotkey_helpers/analog_select_gamepad_helper_panel').setProperty({
    offset: [0, "26px"]
})

Modify.EmoteWheelScreen('emote_wheel_screen_content').modifications.controls
    .remove("instruction_padding")
    .remove("instruction_panel")
    .remove("dressing_room_button_panel");


// For showing "Emote" when the player hasn't selected anything
const emoteText = JsonUIElement.extendOf(UI.PersonaCommon.EmoteLabel, {
    font_type: FontType.Default,
    shadow: true,
    font_scale_factor: 1.0,
    size: [125, 32],
    layer: 999,
    offset: [0, 0],
    max_size: [125, 32],
    text: "hudScreen.tooltip.emote",
    text_alignment: "center",
    bindings: [
        {
            binding_name: "#emote_name"
        },
        {
            binding_name: "(#emote_name = '')",
            binding_name_override: "#visible"
        }
    ]

});
