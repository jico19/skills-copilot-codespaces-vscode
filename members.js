function skillsMember() {
    return {
        name: 'skills-member',
        template: `
            <div class="skills-member">
                <h3>{{ member.name }}</h3>
                <p>{{ member.description }}</p>
            </div>
        `,
        props: {
            member: {
                type: Object,
                required: true
            }
        }
    };
}