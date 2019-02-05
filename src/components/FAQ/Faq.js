import React from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

export default class Faq extends React.Component {
    render() {
        return (
            <div className="question-list">
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Jakie są opłaty?</ListGroupItemHeading>
                        <ListGroupItemText>
                            Korzystanie z portalu jest darmowe. Za korepetycje odbywają się w systemie wymiany
                            umiejętność za umiejętność.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Co jeśli nie mam nic do zaoferowania?</ListGroupItemHeading>
                        <ListGroupItemText>
                            Każdy ma coś do zaoferowania - swój wolny czas. Nie musisz uczyć kogoś fizyki kwantowej,
                            równie dobrze możesz pokazać najlepsze restauracje w mieście. Wszystko zalezy od Ciebie!
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Zapomniałem hasła, co teraz?</ListGroupItemHeading>
                        <ListGroupItemText>
                            W formularzu logowania możesz skozystać z funkcji resetu hasła.
                            Po wpisaniu adresu email, podanego podczas rejestraji, wyślemy do Ciebie wiadomość
                            z nowym hasłem. Nie zapomnij od razu go zmienić!
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}