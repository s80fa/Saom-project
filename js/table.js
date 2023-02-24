
var $table = $('#table')

        $(function () {
            $('#toolbar').find('select').change(function () {
                $table.bootstrapTable('destroy').bootstrapTable({
                    exportDataType: $(this).val(),
                    exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
                    // columns: [
                    //     {
                    //         field: 'id',
                    //         title: 'Username'
                    //     }, {
                    //         field: 'source',
                    //         title: 'Database'
                    //     }, {
                    //         field: 'percentage',
                    //         title: 'Similarity Score (%)'
                    //     }
                    // ]
                })
            }).trigger('change')
        })