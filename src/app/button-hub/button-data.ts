export class ButtonData {
    id: string;
    label: string;
    icon: string;
    hovering = false;
    showIcon = true;
    showText = false;
    timer;

    setId(value: string): ButtonData {
        this.id = value;
        return this;
    }

    setLabel(value: string): ButtonData {
        this.label = value;
        return this;
    }

    setIcon(value: string): ButtonData {
        this.icon = value;
        return this;
    }
}
