/*global Proxy */
export default class VueGetters {
    constructor(setting) {
        this.$el = document.querySelector(setting.el);
        this.$template = setting.template;
        this.$data = setting.data;
        this.data = new Proxy(this.$data, {
            get: (target, name) => {
                return target[name];
            },
            set: (target, name, value) => {
                target[name] = value;
                this.render();
                return true;
            }
        });


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