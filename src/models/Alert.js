class Alert {
    constructor(content, variant, dismissible = true) {
        this.content = content;
        this.variant = variant;
        this.dismissible = dismissible;
        this.visible = true;
    }
}

export default Alert;