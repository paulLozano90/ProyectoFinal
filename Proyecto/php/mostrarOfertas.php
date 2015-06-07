<?php

/*
  Autor = Paul Lozano Cruzado
  Fecha = 19-may-2015
  Licencia = default
  Version = 1.0
  Descripcion =
 */

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<?php

include ("./conexion.php");

$conexion = conectar();
mysqli_set_charset($conexion, "utf8");

$consulta = "SELECT id_empresa,idTipo,nombre FROM eventos";
$sql = mysqli_query($conexion, $consulta);

if ($sql) {

    $datosOferta = array();

    while ($datos = mysqli_fetch_array($sql)) {
        $idEmpresa = $datos['id_empresa'];
        $idTipo = $row['idTipo'];
        $nombre = $row['nombre'];
        
        $datosOferta[] = array('idEmpresa' => $idEmpresa, 'idTipo' => $idTipo, 'nombre' => $nombre);
    }
}

desconectar($conexion);

$json_string = json_encode($datosOferta);
echo $json_string;

?>