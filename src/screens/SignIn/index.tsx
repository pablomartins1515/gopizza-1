import React from 'react';
import { Input } from '@components/Input'; 
import { Container } from './styles';
import { Button } from '@components/Button';

export function SignIn (){    
    return (
        <Container>
            
            <Input 
                placeholder='E-mail'
                type='secundary'
                autoCorrect={false}
                autoCapitalize='none'
            />
            
            <Input 
                placeholder='Senha'
                type='secundary'
                secureTextEntry
            /> 

             <Button 
        title='Entrar'
        type='secondary'
        />
              
        </Container>
    );   
}