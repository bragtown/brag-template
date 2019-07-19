<template>
    <div class = "container">
        <b-card>
            <div>
                <b-form-group
                    label = "First Name"
                    :invalid-feedback="validateFirstName">
                    <b-form-input v-model = "name" trim></b-form-input>
                </b-form-group>
            </div>
        </b-card>
    </div>
</template>
<script>
export default {
    
}
</script>
