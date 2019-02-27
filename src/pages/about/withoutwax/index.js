import React from 'react';
import Layout from '../../../components/Layout';

export class Withoutwax extends React.Component {
    render() {
        return (
            <Layout>
                <section style={{ width:"450px", margin:"auto" }}>
                    <p>Back in the days, whenever a sculptor would make a mistake while carving the marble sculpture, they would use a wax to fill in their mistakes.</p>
                    <p>Thus, a sculpture without any wax would be considered truly great piece of work, a masterpiece - there is no flaw, it is authentic and pure in its form.</p>
                    <p>Translated, the latin word for ‘without‘ is <strong><i>sine</i></strong> and ‘wax’ is <strong><i>cera</i></strong> and with these words combined produces sinecera later developed into a word, sincerely.</p>
                    <br />
                    <p style={{ textAlign:"center" }}>… of course, this is all just a story.</p>
                </section>
            </Layout>
        );
    }
}

export default Withoutwax;