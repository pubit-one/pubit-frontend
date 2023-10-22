<template>
    <div class="relative min-h-screen p-20">
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold"> Create License </span>

            <button v-if="currentStep > 1" class="bg-transparent border-none cursor-pointer" @click="backStep">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
            </button>
        </div>
        <div class="py-12 px-8 md:py-24 md:px-60">
            <step-select-content-and-license-type v-if="currentStep === 1" @update-field="updateField" />
            <step-select-license-version
                v-if="currentStep === 2"
                :versions="versions"
                :license-version="getLicenseVersion"
                @select-version="selectVersion"
            />
            <step-enter-content-details
                v-if="currentStep === 3"
                @update-field="updateField"
                @upload-file="uploadFile"
            />
            <step-license-specifications v-if="currentStep === 4" @update-field="updateField" />
            <step-royalty-management v-if="currentStep === 5" @update-field="updateField" />
        </div>
        <div
            class="fixed bg-white content-center right-0 bottom-0 shadow-[35px_35px_60px_-5px_rgba(0,0,0,0.3)] border-slate-200 w-full h-20 p-6 grid justify-end"
        >
            <pubit-button
                v-if="currentStep < 4"
                class="bg-black text-white p-10 border-none cursor-pointer"
                @click="nextStep"
            >
                Next
            </pubit-button>
            <pubit-button
                v-if="currentStep === 4"
                class="bg-black text-white p-10 border-none cursor-pointer"
                @click="finish"
            >
                Finish
            </pubit-button>
        </div>
    </div>
</template>

<script>
import StepSelectContentAndLicenseType from '@Components/pages/createLicense/StepSelectContentAndLicenseType'
import StepSelectLicenseVersion from '@Components/pages/createLicense/StepSelectLicenseVersion'
import StepEnterContentDetails from '@Components/pages/createLicense/StepEnterContentDetails'
import StepLicenseSpecifications from '@Components/pages/createLicense/StepLicenseSpecifications'
import StepRoyaltyManagement from '@Components/pages/createLicense/StepRoyaltyManagement'

import PubitButton from '@Components/common/Buttons/PubitButton'
export default {
    name: 'CreateLicense',

    components: {
        StepSelectLicenseVersion,
        StepEnterContentDetails,
        StepLicenseSpecifications,
        StepRoyaltyManagement,
        StepSelectContentAndLicenseType,
        PubitButton,
    },
    data() {
        return {
            currentStep: 1,
            stepTitles: [
                'Select Content and License Type',
                'Select License Version',
                'Enter Content Details',
                'License Specifications',
                'Royalty Management',
            ],
            versions: [
                {
                    id: 1,
                    name: 'v1.0.0',
                    features: ['Basic usage rights', 'Limited support'],
                },
                {
                    id: 2,
                    name: 'V2.0.0',
                    features: ['Full usage rights', 'Priority support'],
                },
                {
                    id: 3,
                    name: 'V3.0.0',
                    features: ['Full usage rights', 'Priority support'],
                },
            ],
            formData: {
                licenseVersion: 'v1.0.0',
                name: null,
                description: null,
                file: null,
                price: null,
                canTransfer: null,
                canSell: null,
                myShare: null,
                buyerShare: null,
            },
        }
    },
    computed: {
        getLicenseVersion() {
            return this.formData.licenseVersion
        },
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.stepTitles.length) {
                this.currentStep++
            }
        },
        backStep() {
            if (this.currentStep > 1) {
                this.currentStep--
            }
        },
        finish() {
            // Submit form
            console.log(this.formData)
        },
        selectVersion(version) {
            this.formData.licenseVersion = version
        },

        updateField(field, value) {
            this.formData[field] = value
        },
        uploadFile(file) {
            this.formData['file'] = file
        },
    },
}
</script>
