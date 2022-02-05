export default class VueGetters {
    constructor(setting) {
        this.$el = document.querySelector(setting.el);
        this.$template = setting.template;
        this.$data = setting.data;
        this.data = {};

        for (let name in this.$data) {
            Object.defineProperty(this.data, name, {
                get: () => {
                    return this.$data[name];
                },
                set: (value) => {
                    this.$data[name] = value;
                    this.render();
                }
            });
        }

        this.render();
    }
    render() {
        let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
            let key = name.trim();
            return this.$data[key];
        });

        this.$el.innerHTML = html;
    }
}