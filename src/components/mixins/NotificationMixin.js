var NotificationMixin = {
    data: () => ({
        notification: {
            show: false,
            message: ''
        }
    }),
    methods: {
        showNotification: function(msg = '') {
            this.notification.message = msg;
            this.notification.show = true;
        },
        hideNotification: function() {
            this.notification.show = false;
        }
    }
}

export default NotificationMixin;