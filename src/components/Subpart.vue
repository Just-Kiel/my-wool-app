<template>
        {{ subpart_name }}

          <i-button-group>
            <!-- TODO go to subpart -->
            <i-button size="sm" color="secondary" @click="visible = true; valueCounter()">Aller</i-button>

            <!-- TODO add delete subpart obviously -->
            <i-button size="sm" color="danger">Supprimer</i-button>
          </i-button-group>

    <i-modal v-model="visible">
        <template #header>
            {{ project_name }} - {{ subpart_name }}
        </template>
        
        <p>Ici c'est la sous partie !</p>

        <div v-if="counters[0] != null">
        <i-card color="secondary" size="sm" v-for="(counter, id) in counters" :key="counter">
            <template #header>{{ counter.nameCounter }}</template>
            Motif : 
            <div id="motif" v-for="(motif) in counter.compoCounter" :key="motif">
                {{ motif.count + motif.sequence + ' ' }}
            </div>

            <!-- {{ counter.compoCounter }} -->
            <div id="bloc">
                <div  v-for="index in counter.length" :key="index">
                    <i-checkbox-group v-for="test in counter.compoCounter" :key="test" v-model="checked[id]" inline size="sm">
                        {{ index }}
                        <!-- {{ test.count }} -->
                        <i-checkbox @change="saveChecked(id)" :value="index"/>
                    </i-checkbox-group>
                </div>
            </div>

            <div v-for="test in counter.compoCounter" :key="test">
                {{ indexes[id] }}
                <!-- {{ indexes[0]++ }} -->
                <!-- {{ "oui " + indexes[0] }} -->
                <div v-if="test.sequence == 'S'">
                    <!-- TODO ça bug au niveau des indexes -->
                    {{ test.count * test.lengthSeq }}
                    <i-checkbox @change="saveChecked(id)" :value="indexes[id]"/>
                </div>
                {{ test }}
            </div>
        </i-card>
        </div>

        <br>

        <i-button @click="addCounter = true" color="secondary">Ajouter un compteur</i-button>

        <template #footer v-if="pseudo != undefined">
            My Wool App - {{ pseudo }}
        </template>
    </i-modal>


    <i-modal v-model="addCounter">
        <template #header>
            Ajouter un compteur dans {{ project_name }} - {{ subpart_name }}
        </template>

        <i-form @submit="onSubmit">
            <i-form-group inline>
                <i-form-label>Nom :</i-form-label>
                <i-input v-model="nameCounter" placement="right" placeholder="Nom du compteur..." />
            </i-form-group>
            
            <i-form-group id="form">
                <i-form-label>Description du motif :</i-form-label>
                <i-tooltip placement="right" size="sm">
                    <i-icon name="ink-info" />
                    <template #body>
                        S pour simple (1 sur 1)
                        <br>
                        A pour augmentation (2 sur 1)
                        <br>
                        R pour réduction (1 sur 2)
                    </template>
                </i-tooltip>
                <i-input v-model="compoCounter" placeholder="Composition du motif..." />
            </i-form-group>

            <i-form-group>
                <i-button type="submit" :loading="loading">
                    Ajouter
                </i-button>
            </i-form-group>
        </i-form>

        <template #footer v-if="pseudo != undefined">
            My Wool App - {{ pseudo }}
        </template>
    </i-modal>
</template>

<script>
export default {
    name: 'Subpart',
    props: {
        project_name: String,
        subpart_name: String,
        project_id: Number,
        subpart_id: Number,
    },
    data() {
        return {
            pseudo : localStorage.pseudo,
            visible: false,
            addCounter: false,
            nameCounter: '',
            compoCounter: '',
            loading: false,
            counters: this.checkCounters(),
            compositions: this.valueCounter(),
            checked: {},
            indexes: {}
        }
    },
    created() {
        let test = JSON.parse(JSON.stringify(this.checked))

        // for (let index = 0; index < test.length; index++) {
        //     console.log("oui")
        //     this.indexes.push("oui")
        // }

        // console.log(JSON.parse(JSON.stringify(this.indexes)));

        // attribuer les checked au chargement
        let temp = JSON.parse(JSON.stringify(this.counters))

        for (let index = 0; index < temp.length; index++) {            
            test[index] = [];
            for (let i = 1; i <= temp[index].current; i++) {
                test[index].push(i)
            }
        }

        var size = Object.keys(test).length;
        console.log(size)
        for (let index = 0; index < size; index++) {
            // console.log("oui")
            this.indexes[index] = [];
            for (let i = 1; i <= temp[index].length; i++) {
                this.indexes[index].push(i)
            }
        }

        // console.log(this.indexes);

        this.checked = test
    },
    methods: {
        saveChecked(id) {
            let test = JSON.parse(JSON.stringify(this.checked))
            var temp = JSON.parse(JSON.stringify(this.counters[id]))

            // console.log(test)

            let tempValue = 1;

            temp.current = Math.max(...test[id]);

            test[id] = [];

            while (temp.current >= tempValue) {
                test[id].push(tempValue);

                tempValue++;
            }

            this.checked[id] = test[id]

            this.counters[id] = temp;

            let save = localStorage.getItem('project_' + this.project_id)
            save = JSON.parse(save)
            save.subparts[this.subpart_id].counters = this.counters
            localStorage.setItem('project_' + this.project_id, JSON.stringify(save))


            console.log(temp.compoCounter)
        },

        valueCounter() {
            var tempName = 'project_' + this.project_id;

            var sessionData = JSON.parse(localStorage.getItem(tempName));

            var tempCounters = sessionData.subparts[this.subpart_id].counters;
            this.compositions = tempCounters;

            // TODO if sequence.length > 1 faire des petits blocs avec checkbox else faire un gros bloc avec tout le monde (par 5 histoire que ça soit facile à compter)
        },

        checkCounters() {
            var tempName = 'project_' + this.project_id;
            var sessionData = JSON.parse(localStorage.getItem(tempName));

            // console.log(this.counters)

            this.counters = sessionData.subparts[this.subpart_id].counters;

            return sessionData.subparts[this.subpart_id].counters
        },

        onSubmit () {
            var newCounter = {"nameCounter": this.nameCounter, "compoCounter": this.compoCounter, "current": 0};

            var tempName = 'project_' + this.project_id;

            var sessionData = JSON.parse(localStorage.getItem(tempName));

            var tempCounters = sessionData.subparts[this.subpart_id].counters;

            console.log(tempCounters)

            tempCounters.push(newCounter);

            console.log(tempCounters)

            sessionData.subparts[this.subpart_id].counters = tempCounters;

            localStorage.setItem(tempName, JSON.stringify(sessionData));

            this.checkCounters();

            this.loading = true;

            setTimeout(() => {
                this.loading = false;
                this.nameCounter = '';
                this.compoCounter = '';
            }, 2000);

            this.compositions.forEach(element => {
                console.log(element.compoCounter);
                let sections = element.compoCounter.replaceAll(" ", "");

                sections = sections.split(",");

                sections = sections.map((x) => {
                    let tryParse = parseInt(x[0], 10);
                    return { count: tryParse || 1, 
                    sequence: x.slice(isNaN(tryParse) ? 0 : 1) };
                });

                element.compoCounter = sections

                sections = sections
                .map((x) => {
                    let sequenceTot = x["sequence"]
                    .replaceAll("S", "1")
                    .replaceAll("A", "2")
                    .replaceAll("R", "1")
                    .split('')
                    .map((x) => parseInt(x, 10))
                    .reduce((p, a) => p + a)

                    x.lengthSeq = sequenceTot

                    return x
                })

                let length = sections
                .map((x) => {
                    let sequenceTot = x["sequence"]
                    .replaceAll("S", "1")
                    .replaceAll("A", "2")
                    .replaceAll("R", "1")
                    .split('')
                    .map((x) => parseInt(x, 10))
                    .reduce((p, a) => p + a)

                    return x["count"] * sequenceTot;
                })
                .reduce((p, a) => p + a);

                element.compoCounter = sections;
                element.length = length
            });

            this.counters = this.compositions
        }
    }
}
</script>

<style>
.checkbox, .checkbox-label::before{
    margin-right: 1px !important;
}
#motif {
    display: inline;
}
#bloc {
    display: flex;
}
</style>