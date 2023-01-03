const qirmizi = document.getElementById('circle1')
const mavi = document.getElementById('circle2')
const yasil = document.getElementById('circle3')
const cehrayi = document.getElementById('circle4')
const basliq = document.getElementById('basliq')
const bottom = document.getElementById('bottom')

basliq.style.margin = '0 165px'
basliq.style.paddingBottom = '20px'

bottom.style.margin = '0 32px'
bottom.style.paddingTop = '20px'
bottom.style.fontSize = '20px'


qirmizi.style.width = '120px'
qirmizi.style.height = '120px'
qirmizi.style.borderRadius = '50%'
qirmizi.style.backgroundColor = 'red'
qirmizi.style.display = 'inline-block'
qirmizi.style.marginLeft = '40px'
qirmizi.style.border = '2px solid black'
qirmizi.onclick = () => {
    document.body.style.backgroundColor = 'red'
}

mavi.style.width = '120px'
mavi.style.height = '120px'
mavi.style.borderRadius = '50%'
mavi.style.backgroundColor = 'blue'
mavi.style.display = 'inline-block'
mavi.style.marginLeft = '40px'
mavi.style.border = '2px solid black'
mavi.onclick = () => {
    document.body.style.backgroundColor = 'blue'
}

yasil.style.width = '120px'
yasil.style.height = '120px'
yasil.style.borderRadius = '50%'
yasil.style.backgroundColor = 'green'
yasil.style.display = 'inline-block'
yasil.style.marginLeft = '40px'
yasil.style.border = '2px solid black'
yasil.onclick = () => {
    document.body.style.backgroundColor = 'green'
}

cehrayi.style.width = '120px'
cehrayi.style.height = '120px'
cehrayi.style.borderRadius = '50%'
cehrayi.style.backgroundColor = 'purple'
cehrayi.style.display = 'inline-block'
cehrayi.style.marginLeft = '40px'
cehrayi.style.border = '2px solid black'
cehrayi.onclick = () => {
    document.body.style.backgroundColor = 'purple'
}