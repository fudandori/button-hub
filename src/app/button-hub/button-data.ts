export class ButtonData {
    label: string;
    icon: string;
    hovering = 'icon';
    showIcon = true;
    showText = false;
    timer;

    setLabel(value: string): ButtonData {
        this.label = value;
        return this;
    }

    setIcon(value: string): ButtonData {
        this.icon = value;
        return this;
    }
}
