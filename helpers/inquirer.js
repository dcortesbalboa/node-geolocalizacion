const inquirer = require('inquirer');
require('colors');

const menuOpt=[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
        {value: 1, name: `${'1'.green}. Buscar ciudad`}, 
        {value: 2, name: `${'2'.green}. Histórico`},  
        {value: 0, name: `${'0'.green}. Salir`}, 
    
    ]
    }


];

const menuPause=[
    {
        type: 'input',
        name: 'opcion',
        message: `Presione ${'ENTER'.green} para continuar`,
        choices: []
    }
];

const mostrarMenu = async()=>{

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.green);
    console.log('===========================\n'.green);

    const {opcion} =await inquirer.prompt(menuOpt);
    return opcion;

}

const listarLugares = async(options=[])=>{

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.green);
    console.log('===========================\n'.green);

    let optBorrado=options.map((item, index)=>{
        return {value: `${item.id}`, name: `${index.toString().green}. ${item.nombre}`}
    })

    optBorrado.unshift({value: `0`, name: `0`.green +'. Cancelar'});
    const menuBorrado={
        type: 'list',
        name: 'opcion',
        message: 'Seleccione ligar',
        choices: optBorrado
    };

    const {opcion} =await inquirer.prompt(menuBorrado);
    return opcion;

}

const mostrarMenuCheckList = async(options=[])=>{

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.green);
    console.log('===========================\n'.green);

    let optBorrado=options.map((item, index)=>{
        return {value: `${item.id}`, 
                name: `${index.toString().green}. ${item.desc}`,
            checked: (item.completadoEn) ? true : false}
    })

   // optBorrado.unshift({value: `0`, name: `0`.green +'. Cancelar'});
    const menuBorrado={
        type: 'checkbox',
        name: 'ids',
        message: 'seleccione tareas',
        choices: optBorrado
    };

    const {ids} =await inquirer.prompt(menuBorrado);
    return ids;

}


const pausa = async()=>{
    const {opcion} =await inquirer.prompt(menuPause);
    return opcion;
}

const leerInput = async(message)=>{
    const menuInput=[
        {
            type: 'input',
            name: 'opcion',
            message,
            validate(value){
                if(value.length===0){
                    return "Por favor introduzca un valor";
                }
                return true;
            }
        }
    ];
     
    const {opcion} =await inquirer.prompt(menuInput);
    return opcion;
}

const confirmar=async (message)=>{
    const question={
        type: 'confirm',
        name: 'ok',
        message
    }

    const {ok} = await inquirer.prompt(question);

    return ok;
}

module.exports = {
    mostrarMenu,
    pausa ,
    leerInput,
    confirmar,
    mostrarMenuCheckList,
    listarLugares
}